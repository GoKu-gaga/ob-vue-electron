<template>
  <Menu :active-name="$route.path" theme="dark" width="auto" :open-names="openNames" @on-select="jump" accordion>
    <Menu-item name="/login">
      <Icon type="log-in"></Icon>
      登录
    </Menu-item>
    <Menu-item name="/dashboard">
      <Icon type="ios-analytics-outline"></Icon>
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
    <Submenu name="network">
      <template slot="title">
        <Icon type="network"></Icon>
        网络
      </template>
      <Menu-item name="/networks">网络</Menu-item>
      <Menu-item name="/subnets">子网</Menu-item>
    </Submenu>
    <Submenu name="security">
      <template slot="title">
        <Icon type="locked"></Icon>
        安全组
      </template>
      <Menu-item name="/security-groups">安全组</Menu-item>
      <Menu-item name="/security-group-rules">网络规则</Menu-item>
    </Submenu>
    <Submenu name="storage">
      <template slot="title">
        <Icon type="ios-cloud"></Icon>
        存储
      </template>
      <Menu-item name="/storages">存储</Menu-item>
      <Menu-item name="/volumes">逻辑卷</Menu-item>
    </Submenu>
    <Submenu name="user">
      <template slot="title">
        <Icon type="android-contact"></Icon>
        用户
      </template>
      <Menu-item name="/user-groups">用户组</Menu-item>
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
    computed: {
      openNames: function () {
        let items
        switch (this.$route.path) {
          case '/dashboard':
            items = ['dashboard']
            break
          case '/clusters':
          case '/ncs':
          case '/vms':
            items = ['compute']
            break
          case '/networks':
          case '/subnets':
            items = ['network']
            break
          case '/security-groups':
          case '/security-group-rules':
            items = ['security']
            break
          case '/storages':
          case '/volumes':
            items = ['storage']
            break
          case '/user-groups':
          case '/users':
            items = ['user']
            break
          case '/component_services':
          case '/warning_msgs':
          case '/operations':
            items = ['monitor']
            break
          case '/platform':
          case '/image':
            items = ['preference']
            break
          default:
        }
        return items
      }
    },
    methods: {
      jump (page) {
        this.$router.replace({path: page})
      }
    }
  }
</script>
<style scoped>
Menu {
  background: #1c2438;
}

</style>
