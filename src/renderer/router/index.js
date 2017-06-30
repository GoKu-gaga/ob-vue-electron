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
          path: '/cluster',
          name: 'cluster-page',
          component: require('@/components/ClusterPage/ClusterPage')
        },
        {
          path: '/nc',
          name: 'nc-page',
          component: require('@/components/NcPage/NcPage')
        },
        {
          path: '/vm',
          name: 'vm-page',
          component: require('@/components/VmPage/VmPage')
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
          path: '/image',
          name: 'image-page',
          component: require('@/components/ImagePage/ImagePage')
        },
        {
          path: '/platform',
          name: 'platform-page',
          component: require('@/components/PlatformPage/PlatformPage')
        },
        {
          path: '/landing',
          name: 'landing-page',
          component: require('@/components/LandingPage')
        }
      ]
    },
    {
      path: '*',
      redirect: '/main'
    }
  ]
})
