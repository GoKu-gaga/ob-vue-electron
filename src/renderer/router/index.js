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
          name: 'dashboard-page',
          component: require('@/components/DashboardPage/DashboardPage')
        },
        {
          path: '/clusters',
          name: 'cluster-page',
          component: require('@/components/ClusterPage/ClusterPage')
        },
        {
          path: '/ncs',
          name: 'nc-page',
          component: require('@/components/NcPage/NcPage')
        },
        {
          path: '/vms',
          name: 'vm-page',
          component: require('@/components/VmPage/VmPage')
        },
        {
          path: '/networks',
          name: 'network-page',
          component: require('@/components/NetworkPage/NetworkPage')
        },
        {
          path: '/subnets',
          name: 'subnet-page',
          component: require('@/components/SubnetPage/SubnetPage')
        },
        {
          path: '/security-groups',
          name: 'security-groups-page',
          component: require('@/components/SecurityGroupsPage/SecurityGroupsPage')
        },
        {
          path: '/security-group-rules',
          name: 'security-group-rules-page',
          component: require('@/components/SecurityGroupRulePage/SecurityGroupRulePage')
        },
        {
          path: '/storages',
          name: 'storage-page',
          component: require('@/components/StoragePage/StoragePage')
        },
        {
          path: '/volumes',
          name: 'volume-page',
          component: require('@/components/VolumePage/VolumePage')
        },
        {
          path: '/user-groups',
          name: 'user-group-page',
          component: require('@/components/UserGroupPage/UserGroupPage')
        },
        {
          path: '/users',
          name: 'user-page',
          component: require('@/components/UserPage/UserPage')
        },
        {
          path: '/component_services',
          name: 'component-services-page',
          component: require('@/components/ComponentServicesPage/ComponentServicesPage')
        },
        {
          path: '/warning_msgs',
          name: 'warning-msgs-page',
          component: require('@/components/WarningMsgsPage/WarningMsgsPage')
        },
        {
          path: '/operations',
          name: 'operation-page',
          component: require('@/components/OperationPage/OperationPage')
        },
        {
          path: '/image',
          name: 'image-page',
          component: require('@/components/ImagePage/ImagePage')
        },
        {
          path: '/platform',
          name: 'platform-page',
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
