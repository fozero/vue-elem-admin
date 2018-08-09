import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'index',
      component: function(resolve) {
          require(['../views/index.vue'], resolve);
      },
      children:[{
        path: '',
        name:'home',
        meta:{
          auth:true,
          action_menu: 'home',
          nav_link: [{title: '管理系统',link:'/'},{title: '控制面板'}]
        },
        component: function(resolve) {
            require(['../views/home.vue'], resolve);
        }
      },{
        path:'order_list',
        name:'order_list',
        meta:{
          auth:true,
          action_menu: 'order_list',
          nav_link: [{title: '管理系统',link:'/'},{title: '订单管理'},{title: '订单列表'}]
        },
        component: function(resolve) {
            require(['../views/order/order_list.vue'], resolve);
        }
      }]
    },{
      path:'login',
      name:'login',
      component: function(resolve) {
          require(['../views/login.vue'], resolve);
      }
    }
  ]
})
