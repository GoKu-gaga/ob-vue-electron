<template>
  <div id="main">
    <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
      <Checkbox label="selection">多选</Checkbox>
      <Checkbox label="direction">规则</Checkbox>
      <Checkbox label="protocol">协议</Checkbox>
      <Checkbox label="max_port">最大允许端口</Checkbox>
      <Checkbox label="min_port">最小允许端口</Checkbox>
      <Checkbox label="remote_ip">远程IP</Checkbox>
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
        tableColumnsChecked: ['selection', 'direction', 'protocol', 'max_port', 'min_port', 'remote_ip', 'action'],
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
            title: '规则',
            key: 'direction'
          },
          {
            title: '协议',
            key: 'protocol'
          },
          {
            title: '最大允许端口',
            key: 'max_port'
          },
          {
            title: '最小允许端口',
            key: 'min_port'
          },
          {
            title: '远程IP',
            key: 'remote_ip'
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
            direction: '规则' + Math.floor(Math.random() * 100 + 1),
            protocol: ['tcp', 'udp', 'icmp'][Math.floor(Math.random() * 3)],
            max_port: Math.floor(Math.random() * 1000 + 1),
            min_port: Math.floor(Math.random() * 1000 + 1),
            remote_ip: this.randomString(5)
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
