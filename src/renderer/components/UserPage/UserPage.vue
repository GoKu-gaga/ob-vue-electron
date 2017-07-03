<template>
  <div id="main">
    <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
      <Checkbox label="selection">多选</Checkbox>
      <Checkbox label="user_name">名称</Checkbox>
      <Checkbox label="name">别名</Checkbox>
      <Checkbox label="email">邮箱</Checkbox>
      <Checkbox label="role">角色</Checkbox>
      <Checkbox label="group">用户组</Checkbox>
      <Checkbox label="action">操作</Checkbox>
    </Checkbox-group>

    <Table
      border
      stripe
      show-header
      height=""
      size="default"
      :data="tableData"
      :columns="tableColumns">
    </Table>

    <div style="margin: 10px;overflow: hidden">
      <div style="float: right;">
        <Page :total="100" :current="1" show-elevator show-sizer @on-page-size-change="changePageSize" @on-change="changePage"></Page>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        tableColumnsChecked: ['selection', 'user_name', 'name', 'email', 'role', 'group', 'action'],
        tableColumns: [],
        tableData: [],
        pageSize: 10
      }
    },
    computed: {

    },
    methods: {
      getTableColumns () {
        const tableColumnList = [
          {
            type: 'selection',
            key: 'selection',
            width: 60,
            align: 'center'
          },
          {
            title: '名称',
            key: 'user_name'
          },
          {
            title: '别名',
            key: 'name'
          },
          {
            title: '邮箱',
            key: 'email'
          },
          {
            title: '角色',
            key: 'role'
          },
          {
            title: '用户组',
            key: 'group'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  }
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ])
            }
          }
        ]

        let data = []
        for (let item of tableColumnList) {
          if (this.tableColumnsChecked.indexOf(item.key) !== -1) {
            data.push(item)
          }
        }
        return data
      },
      changeTableColumns () {
        this.tableColumns = this.getTableColumns()
      },
      mockTableData () {
        let data = []
        for (let i = 0; i < this.pageSize; i++) {
          data.push({
            user_name: '用户' + Math.floor(Math.random() * 100 + 1),
            name: '别名' + Math.floor(Math.random() * 100 + 1),
            email: this.randomString(11),
            role: ['系统管理员', '普通用户'][Math.floor(Math.random() * 2)],
            group: this.randomString(3)
          })
        }
        this.tableData = data
      },
      changePage () {
        // 这里直接更改了模拟的数据，真实使用场景应该从服务端获取数据
        this.mockTableData()
      },
      changePageSize (size) {
        this.pageSize = size
        this.mockTableData()
      },
      formatDate (date) {
        const y = date.getFullYear()
        let m = date.getMonth() + 1
        m = m < 10 ? '0' + m : m
        let d = date.getDate()
        d = d < 10 ? ('0' + d) : d
        return y + '-' + m + '-' + d
      },
      randomString (len, charSet) {
        charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        var randomString = ''
        for (var i = 0; i < len; i++) {
          var randomPoz = Math.floor(Math.random() * charSet.length)
          randomString += charSet.substring(randomPoz, randomPoz + 1)
        }
        return randomString
      }
    },
    mounted () {
      this.changeTableColumns()
      this.mockTableData()
    }
  }
</script>
<style scope>
  #main {
    padding: 10px
  }
</style>
