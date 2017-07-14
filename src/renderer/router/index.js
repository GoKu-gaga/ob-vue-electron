import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login-page',
      component: require('@/pages/LoginPage/LoginPage')
    },
    {
      path: '/main',
      name: 'main-page',
      component: require('@/pages/MainPage/MainPage'),
      children: [
        {
          path: '/dashboard',
          name: '仪表盘',
          component: require('@/pages/DashboardPage/DashboardPage')
        },
        {
          path: '/clusters',
          name: '集群',
          component: require('@/pages/ClusterPage/ClusterPage')
        },
        {
          path: '/ncs',
          name: '计算节点',
          component: require('@/pages/NcPage/NcPage')
        },
        {
          path: '/vms',
          name: '虚拟机',
          component: require('@/pages/VmPage/VmPage')
        },
        {
          path: '/networks',
          name: '网络',
          component: require('@/pages/NetworkPage/NetworkPage')
        },
        {
          path: '/subnets',
          name: '子网',
          component: require('@/pages/SubnetPage/SubnetPage')
        },
        {
          path: '/security-groups',
          name: '安全组',
          component: require('@/pages/SecurityGroupsPage/SecurityGroupsPage')
        },
        {
          path: '/security-group-rules',
          name: '网络规则',
          component: require('@/pages/SecurityGroupRulePage/SecurityGroupRulePage')
        },
        {
          path: '/storages',
          name: '存储',
          component: require('@/pages/StoragePage/StoragePage')
        },
        {
          path: '/volumes',
          name: '逻辑卷',
          component: require('@/pages/VolumePage/VolumePage')
        },
        {
          path: '/user-groups',
          name: '用户组',
          component: require('@/pages/UserGroupPage/UserGroupPage')
        },
        {
          path: '/users',
          name: '用户',
          component: require('@/pages/UserPage/UserPage')
        },
        {
          path: '/component_services',
          name: '运行状态',
          component: require('@/pages/ComponentServicesPage/ComponentServicesPage')
        },
        {
          path: '/warning_msgs',
          name: '警告',
          component: require('@/pages/WarningMsgsPage/WarningMsgsPage')
        },
        {
          path: '/operations',
          name: '操作日志',
          component: require('@/pages/OperationPage/OperationPage')
        },
        {
          path: '/image',
          name: '镜像',
          component: require('@/pages/ImagePage/ImagePage')
        },
        {
          path: '/platform',
          name: '平台信息',
          component: require('@/pages/PlatformPage/PlatformPage')
        }
      ]
    },
    {
      path: '*',
      redirect: '/main'
    }
  ]
})
