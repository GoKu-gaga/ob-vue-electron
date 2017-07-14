<template>
  <div id="main">
    <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
      <Checkbox label="selection">多选</Checkbox>
      <Checkbox label="name">名称</Checkbox>
      <Checkbox label="status">状态</Checkbox>
      <Checkbox label="storage">存储</Checkbox>
      <Checkbox label="capacity">容量</Checkbox>
      <Checkbox label="vm">虚拟机</Checkbox>
      <Checkbox label="user">用户</Checkbox>
      <Checkbox label="create_at">创建于</Checkbox>
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
        tableColumnsChecked: ['selection', 'name', 'status', 'storage', 'capacity', 'vm', 'user', 'create_at', 'action'],
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
            key: 'name'
          },
          {
            title: '状态',
            key: 'status',
            render: (h, params) => {
              const row = params.row
              const color = row.status === 1 ? 'blue' : row.status === 2 ? 'green' : 'red'
              const text = row.status === 1 ? '构建中' : row.status === 2 ? '构建完成' : '构建失败'

              return h('Tag', {
                props: {
                  type: 'dot',
                  color: color
                }
              }, text)
            }
          },
          {
            title: '存储',
            key: 'storage'
          },
          {
            title: '容量',
            key: 'capacity'
          },
          {
            title: '虚拟机',
            key: 'vm'
          },
          {
            title: '用户',
            key: 'user'
          },
          {
            title: '创建于',
            key: 'create_at',
            render: (h, params) => {
              return h('div', this.formatDate(this.tableData[params.index].create_at))
            }
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
            name: '卷' + Math.floor(Math.random() * 100 + 1),
            status: Math.floor(Math.random() * 3 + 1),
            storage: '存储' + Math.floor(Math.random() * 3 + 1),
            capacity: Math.floor(Math.random() * 1000 + 1),
            vm: Math.floor(Math.random() * 1000 + 1),
            user: '用户' + Math.floor(Math.random() * 1000 + 1),
            create_at: new Date()
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
