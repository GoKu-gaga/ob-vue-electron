<template>
  <div id="main">
    <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
      <Checkbox label="selection">多选</Checkbox>
      <Checkbox label="name">名称</Checkbox>
      <Checkbox label="status">状态</Checkbox>
      <Checkbox label="desc">描述</Checkbox>
      <Checkbox label="os">OS</Checkbox>
      <Checkbox label="version">版本</Checkbox>
      <Checkbox label="min_vcpu">最小vCpu</Checkbox>
      <Checkbox label="min_mem">最小内存</Checkbox>
      <Checkbox label="size">大小</Checkbox>
      <Checkbox label="create_time">创建于</Checkbox>
      <Checkbox label="path">上传路径</Checkbox>
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
        tableColumnsChecked: ['selection', 'name', 'status', 'desc', 'os', 'version', 'min_vcpu', 'min_mem', 'size', 'create_time', 'path', 'action'],
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
            title: '描述',
            key: 'desc'
          },
          {
            title: 'OS',
            key: 'os'
          },
          {
            title: '版本',
            key: 'version'
          },
          {
            title: '最小vCPU',
            key: 'min_vcpu'
          },
          {
            title: '最小内存',
            key: 'min_mem'
          },
          {
            title: '创建于',
            key: 'create_time',
            render: (h, params) => {
              return h('div', this.formatDate(this.tableData[params.index].create_time))
            }
          },
          {
            title: '上传路径',
            key: 'path'
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
                }, '编辑'),
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
            name: '镜像' + Math.floor(Math.random() * 100 + 1),
            status: Math.floor(Math.random() * 3 + 1),
            desc: this.randomString(20),
            os: this.randomString(3),
            version: this.randomString(5),
            min_vcpu: Math.floor(Math.random() * 60 + 1),
            min_mem: Math.floor(Math.random() * 10000 + 1) + 'MB',
            size: Math.floor(Math.random() * 10000 + 1) + 'GB',
            create_time: new Date(),
            path: this.randomString(1, 'CDE') + ':\\' + this.randomString(5)
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
