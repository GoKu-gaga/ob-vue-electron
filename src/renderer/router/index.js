import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login-page',
      component: require('@/components/LoginPage/LoginPage')
    },
    {
      path: '/main',
      name: 'main-page',
      component: require('@/components/MainPage/MainPage'),
      children: [
        {
          path: '/dashboard',
          name: '仪表盘',
          component: require('@/components/DashboardPage/DashboardPage')
        },
        {
          path: '/clusters',
          name: '集群',
          component: require('@/components/ClusterPage/ClusterPage')
        },
        {
          path: '/ncs',
          name: '计算节点',
          component: require('@/components/NcPage/NcPage')
        },
        {
          path: '/vms',
          name: '虚拟机',
          component: require('@/components/VmPage/VmPage')
        },
        {
          path: '/networks',
          name: '网络',
          component: require('@/components/NetworkPage/NetworkPage')
        },
        {
          path: '/subnets',
          name: '子网',
          component: require('@/components/SubnetPage/SubnetPage')
        },
        {
          path: '/security-groups',
          name: '安全组',
          component: require('@/components/SecurityGroupsPage/SecurityGroupsPage')
        },
        {
          path: '/security-group-rules',
          name: '网络规则',
          component: require('@/components/SecurityGroupRulePage/SecurityGroupRulePage')
        },
        {
          path: '/storages',
          name: '存储',
          component: require('@/components/StoragePage/StoragePage')
        },
        {
          path: '/volumes',
          name: '逻辑卷',
          component: require('@/components/VolumePage/VolumePage')
        },
        {
          path: '/user-groups',
          name: '用户组',
          component: require('@/components/UserGroupPage/UserGroupPage')
        },
        {
          path: '/users',
          name: '用户',
          component: require('@/components/UserPage/UserPage')
        },
        {
          path: '/component_services',
          name: '运行状态',
          component: require('@/components/ComponentServicesPage/ComponentServicesPage')
        },
        {
          path: '/warning_msgs',
          name: '警告',
          component: require('@/components/WarningMsgsPage/WarningMsgsPage')
        },
        {
          path: '/operations',
          name: '操作日志',
          component: require('@/components/OperationPage/OperationPage')
        },
        {
          path: '/image',
          name: '镜像',
          component: require('@/components/ImagePage/ImagePage')
        },
        {
          path: '/platform',
          name: '平台信息',
          component: require('@/components/PlatformPage/PlatformPage')
        }
      ]
    },
    {
      path: '*',
      redirect: '/main'
    }
  ]
})
