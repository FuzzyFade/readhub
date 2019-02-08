import Vue from 'vue'
import Router from 'vue-router'
import Topic from './views/Topic.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'/',
      name: 'homepage',
      component:Topic
    },
    {
      path: '/topic',
      name: 'topic',
      component: Topic
    },
  ]
})
