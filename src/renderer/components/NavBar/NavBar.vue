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
        <Menu-item name="/compute/nc">计算节点</Menu-item>
        <Menu-item name="/compute/vm">虚拟机</Menu-item>
    </Submenu>
    <Submenu name="3">
        <template slot="title">
            <Icon type="ios-analytics"></Icon>
            导航三
        </template>
        <Menu-item name="/landing">选项 1</Menu-item>
        <Menu-item name="3-2">选项 2</Menu-item>
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
