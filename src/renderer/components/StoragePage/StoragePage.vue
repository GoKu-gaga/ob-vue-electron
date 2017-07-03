<template>
  <div id="main">
    <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
      <Checkbox label="name">名称</Checkbox>
      <Checkbox label="status">状态</Checkbox>
      <Checkbox label="ip">存储IP</Checkbox>
      <Checkbox label="type">类型</Checkbox>
      <Checkbox label="volume">逻辑卷数量</Checkbox>
      <Checkbox label="nc">节点</Checkbox>
      <Checkbox label="excess">超配</Checkbox>
      <Checkbox label="capacity">容量</Checkbox>
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
        tableColumnsChecked: ['name', 'status', 'ip', 'type', 'volume', 'nc', 'excess', 'capacity', 'action'],
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
            title: '存储IP',
            key: 'ip'
          },
          {
            title: '类型',
            key: 'type'
          },
          {
            title: '逻辑卷数量',
            key: 'volume'
          },
          {
            title: '节点',
            key: 'nc'
          },
          {
            title: '超配',
            key: 'excess'
          },
          {
            title: '容量',
            key: 'capacity'
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
            name: '存储' + Math.floor(Math.random() * 100 + 1),
            status: Math.floor(Math.random() * 3 + 1),
            ip: 'IP' + Math.floor(Math.random() * 100 + 1),
            type: ['SS:nfs', 'ceph'][Math.floor(Math.random() * 2)],
            volume: Math.floor(Math.random() * 20 + 1),
            nc: Math.floor(Math.random() * 20 + 1),
            excess: Math.floor(Math.random() * 3 + 1),
            capacity: Math.floor(Math.random() * 1000 + 1)
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
