<template>
  <div class="main">
    <Collapse v-model="panelOpened">
      <Panel v-for="item in services">
        {{item.name}}
        <div slot="content">
          <h3>平台版本</h3>
          <p>v1.2.3.11</p>
        </div>
      </Panel>
    </Collapse>
  </div>
</template>
<script>
    export default {
      data () {
        return {
          services: [],
          panelOpened: ''
        }
      },
      methods: {
        mockServices () {
          this.services = [
            {name: '存储', status: 1},
            {name: '业务逻辑', status: 1},
            {name: '查询服务', status: 1},
            {name: '用户管理', status: 1},
            {name: '后台', status: 1},
            {name: '网络', status: 1},
            {name: '镜像', status: 1},
            {name: '监控', status: 1}
          ]
        }
      },
      mounted () {
        this.mockServices()
      }
    }
</script>
<style scoped>

</style>
