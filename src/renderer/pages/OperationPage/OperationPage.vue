<template>
  <div id="main">
    <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
      <Checkbox label="operator">操作者</Checkbox>
      <Checkbox label="name">操作名称</Checkbox>
      <Checkbox label="target">操作对象</Checkbox>
      <Checkbox label="result">操作结果</Checkbox>
      <Checkbox label="reason">失败原因</Checkbox>
      <Checkbox label="create_at">操作时间</Checkbox>
      <Checkbox label="update_at">更新时间</Checkbox>
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
        tableColumnsChecked: ['operator', 'name', 'target', 'result', 'reason', 'create_at', 'update_at'],
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
            title: '操作者',
            key: 'operator'
          },
          {
            title: '操作名称',
            key: 'name'
          },
          {
            title: '操作对象',
            key: 'target'
          },
          {
            title: '操作结果',
            key: 'result',
            render: (h, params) => {
              const row = params.row
              const color = row.result === 1 ? 'blue' : row.result === 2 ? 'green' : 'red'
              const text = row.result === 1 ? '构建中' : row.result === 2 ? '构建完成' : '构建失败'

              return h('Tag', {
                props: {
                  type: 'dot',
                  color: color
                }
              }, text)
            }
          },
          {
            title: '失败原因',
            key: 'reason'
          },
          {
            title: '操作时间',
            key: 'create_at',
            render: (h, params) => {
              return h('div', this.formatDate(this.tableData[params.index].create_at))
            }
          },
          {
            title: '更新时间',
            key: 'update_at',
            render: (h, params) => {
              return h('div', this.formatDate(this.tableData[params.index].update_at))
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
            operator: '操作者' + Math.floor(Math.random() * 100 + 1),
            name: '操作' + Math.floor(Math.random() * 100 + 1),
            target: this.randomString(3),
            result: Math.floor(Math.random() * 3 + 1),
            reason: this.randomString(3),
            create_at: new Date(),
            update_at: new Date()
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
