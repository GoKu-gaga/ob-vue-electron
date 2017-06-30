<template>
  <div id="main">
    <Checkbox-group v-model="tableColumnsChecked" @on-change="changeTableColumns">
      <Checkbox label="name">名称</Checkbox>
      <Checkbox label="type">类型</Checkbox>
      <Checkbox label="level">警告等级</Checkbox>
      <Checkbox label="msg">警告信息</Checkbox>
      <Checkbox label="time">时间</Checkbox>
      <Checkbox label="value">当前值</Checkbox>
      <Checkbox label="max">阈值</Checkbox>
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
        tableColumnsChecked: ['name', 'type', 'level', 'msg', 'time', 'value', 'max'],
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
            title: '类型',
            key: 'type'
          },
          {
            title: '警告等级',
            key: 'level'
          },
          {
            title: '警告信息',
            key: 'msg'
          },
          {
            title: '时间',
            key: 'time',
            render: (h, params) => {
              return h('div', this.formatDate(this.tableData[params.index].create_time))
            }
          },
          {
            title: '当前值',
            key: 'value'
          },
          {
            title: '阈值',
            key: 'max'
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
            name: '名称' + Math.floor(Math.random() * 100 + 1),
            type: this.randomString(3),
            level: Math.floor(Math.random() * 3 + 1),
            msg: this.randomString(5),
            create_time: new Date(),
            value: Math.floor(Math.random() * 100 + 1) + '%',
            max: Math.floor(Math.random() * 100 + 1) + '%'
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
