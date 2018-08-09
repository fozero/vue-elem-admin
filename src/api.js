// api.js
import Vue from 'vue'
import { WEBAPI_ROOT, WEBPAYAPI_ROOT } from './config'
export default{
    islogin() {
        //检查用户是否已经登陆
        const req = Vue.http.post(WEBAPI_ROOT + '/islogin');
        return req.then((response) => Promise.resolve(response.data));
    },
    logout() {
        //检查用户是否已经登陆
        const req = Vue.http.post(WEBAPI_ROOT + '/ajaxlogout');
        return req.then((response) => Promise.resolve(response.data));
    },
    dologin(data) {
        //用户中心摘要
        const req = Vue.http.post(WEBAPI_ROOT + '/dologin', data);
        return req.then((response) => Promise.resolve(response.data));
    },
}