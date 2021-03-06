import Vue from 'vue'
import Router from 'vue-router'

import PageHome from '@/pages/PageHome'
import PageMeetupDetail from '@/pages/PageMeetupDetail'
import PageMeetupFind from '@/pages/PageMeetupFind'
import PageLogin from '@/pages/PageLogin'
import PageRegister from '@/pages/PageRegister'
import PageNotFound from '@/pages/PageNotFound'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'PageHome',
      component: PageHome
    },
    {
      path: '/buscar',
      name: 'PageMeetupFind',
      component: PageMeetupFind
    },
    {
      path: '/encuentro/:id',
      name: 'PageMeetupDetail',
      component: PageMeetupDetail
    },
    {
      path: '/login',
      name: 'PageLogin',
      component: PageLogin
    },
    {
      path: '/register',
      name: 'PageRegister',
      component: PageRegister
    },
    {
      path: '*',
      name: 'pageNotFound',
      component: PageNotFound
    }
  ],
  mode: 'history'
})

export default router