import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Amap from '@/components/Amap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Amap',
      component: Amap
    }
  ]
})
