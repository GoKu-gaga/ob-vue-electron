<template>
  <Menu active-name="dashboard" theme="dark" width="auto" :open-names="['1']" @on-select="jump" accordion>
    <div class="layout-logo-left">
      <img id="logo" src="~@/assets/logo.png" alt="electron-vue">
    </div>
    <Menu-item name="dashboard">
        <Icon type="ios-speedometer-outline"></Icon>
        仪表盘
    </Menu-item>
    <Submenu name="compute">
        <template slot="title">
          <Icon type="ios-keypad"></Icon>
          计算
        </template>
        <Menu-item name="/clusters">集群</Menu-item>
        <Menu-item name="/ncs">计算节点</Menu-item>
        <Menu-item name="/vms">虚拟机</Menu-item>
    </Submenu>
    <Submenu name="user">
        <template slot="title">
          <Icon type="ios-person-outline"></Icon>
          用户
        </template>
        <Menu-item name="/groups">用户组</Menu-item>
        <Menu-item name="/users">用户</Menu-item>
    </Submenu>
    <Submenu name="monitor">
        <template slot="title">
          <Icon type="monitor"></Icon>
          监控
        </template>
        <Menu-item name="/component_services">平台运行状态</Menu-item>
        <Menu-item name="/warning_msgs">警告信息</Menu-item>
        <Menu-item name="/operations">操作日志</Menu-item>
    </Submenu>
    <Submenu name="preference">
        <template slot="title">
          <Icon type="android-options"></Icon>
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
