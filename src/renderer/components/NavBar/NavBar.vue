<template>
  <Menu active-name="1" theme="dark" width="auto" :open-names="['1']" @on-select="jump" accordion>
    <div class="layout-logo-left">
      <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
    </div>
    <Menu-item name="/dashboard">
        <Icon type="help-buoy"></Icon>
        仪表盘
    </Menu-item>
    <Submenu name="2">
        <template slot="title">
            <Icon type="ios-keypad"></Icon>
            计算
        </template>
        <Menu-item name="/cluster">集群</Menu-item>
        <Menu-item name="/nc">计算节点</Menu-item>
        <Menu-item name="/vm">虚拟机</Menu-item>
    </Submenu>
    <Submenu name="3">
        <template slot="title">
            <Icon type="ios-analytics"></Icon>
            配置
        </template>
        <Menu-item name="/platform">平台信息</Menu-item>
        <Menu-item name="/image">镜像</Menu-item>
    </Submenu>
  </Menu>
</template>
<script>
  export default {
    name: 'nav-bar',
    data () {
      return {

      }
    },
    methods: {
      jump (page) {
        this.$router.replace({path: page})
      }
    }
  }
</script>
<style>
.layout-logo-left{
  display: flex;
  justify-content: center;
  width: 100%;
  height: 30px;
  border-radius: 3px;
  margin: 15px auto;
}

#logo {
  height: 30px;
  width: auto;
}
</style>
