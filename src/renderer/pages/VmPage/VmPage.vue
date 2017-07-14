<template>
  <div id="main">
    <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
      <Checkbox label="selection">多选</Checkbox>
      <Checkbox label="name">名称</Checkbox>
      <Checkbox label="tag">标签</Checkbox>
      <Checkbox label="status">状态</Checkbox>
      <Checkbox label="ha">高可用</Checkbox>
      <Checkbox label="user">用户</Checkbox>
      <Checkbox label="create_time">创建于</Checkbox>
      <Checkbox label="net">网络</Checkbox>
      <Checkbox label="cluster">集群</Checkbox>
      <Checkbox label="nc">计算节点</Checkbox>
      <Checkbox label="vcpu">vCpu</Checkbox>
      <Checkbox label="mem">内存</Checkbox>
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
        tableColumnsChecked: ['selection', 'name', 'tag', 'status', 'ha', 'user', 'create_time', 'net', 'cluster', 'nc', 'vcpu', 'mem', 'action'],
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
            title: '标签',
            key: 'tag',
            render: (h, params) => {
              return h('Tag', {
                props: {
                  color: 'green'
                }
              }, params.row.tag)
            }
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
            title: '高可用',
            key: 'ha'
          },
          {
            title: '用户',
            key: 'user'
          },
          {
            title: '创建于',
            key: 'create_time',
            render: (h, params) => {
              return h('div', this.formatDate(this.tableData[params.index].create_time))
            }
          },
          {
            title: '网络',
            key: 'net'
          },
          {
            title: '集群',
            key: 'cluster'
          },
          {
            title: '计算节点',
            key: 'nc'
          },
          {
            title: 'vCPU',
            key: 'vcpu'
          },
          {
            title: '内存',
            key: 'mem'
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
      formatDate (date) {
        const y = date.getFullYear()
        let m = date.getMonth() + 1
        m = m < 10 ? '0' + m : m
        let d = date.getDate()
        d = d < 10 ? ('0' + d) : d
        return y + '-' + m + '-' + d
      },
      changeTableColumns () {
        this.tableColumns = this.getTableColumns()
      },
      mockTableData () {
        let data = []
        for (let i = 0; i < this.pageSize; i++) {
          data.push({
            name: 'vm' + Math.floor(Math.random() * 100 + 1),
            status: Math.floor(Math.random() * 3 + 1),
            tag: this.randomString(3),
            ha: Math.floor(Math.random() * 100 + 1),
            user: this.randomString(5),
            create_time: new Date(),
            net: this.randomString(5),
            cluster: '集群' + Math.floor(Math.random() * 10 + 1),
            nc: Math.floor(Math.random() * 10 + 1),
            vcpu: Math.floor(Math.random() * 60 + 1),
            mem: Math.floor(Math.random() * 10000 + 1)
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
