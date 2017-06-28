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
