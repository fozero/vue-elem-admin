// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import './assets/theme/element-variables.scss';
import App from './App';
import VueResource from 'vue-resource'
import store from './vuex/store'
import router from './router';
import filters from '@/utils/filters';
// import axios from "axios";

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });
// Vue.prototype.$axios = axios;
Vue.use(VueResource);

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

// 全局守卫
router.beforeEach((to, from, next) => {
  let isLogin = window.localStorage.getItem('isLogin');
  if(to.meta.auth){
    if (to.meta.nav_link) {
        store.dispatch('setRightNavLinks', to.meta.nav_link)
    }
    if (to.meta.action_menu) {
        store.dispatch('setNavMenu', to.meta.action_menu)
    }
    if(isLogin){
      next()
    }else{
      next({ name: 'login' })
    }
  }else{
    next()
  }
})


// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// // axios拦截
// axios.interceptors.request.use(function (config){
//     // 处理请求之前的配置
//     return config;
//   }, function (error){
//     return Promise.reject(error);
//   });

//  axios.interceptors.response.use(function (response){
//     // 处理响应数据
//     return response;
//   }, function (error){
//     return Promise.reject(error);
//   });


Vue.http.options.credentials = true;
Vue.http.options.emulateJSON = true;
// 每个请求设置token
Vue.http.interceptors.push((request, next) => {
    //debugger;
    next((response) => {
        //debugger;
        if (response.err_code && response.err_msg == 'not_login') {
            // router.push({ path: '/login' });
            location.href = '/login';
        }
    });
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
