<template>
   <div class="login-container">
            <el-form class="login-form" ref="form" :model="form">
                <h3 class="title">vue-elem-admin</h3>
                <el-form-item>
                    <el-input v-model="form.username" placeholder="用户名" size="large"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input type="password" v-model="form.password" placeholder="密码" size="large"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" style="width:100%;"  @click="login" size="large">登录</el-button>
                </el-form-item>
            </el-form> 
       </div>
</template>
<script>
import api from '../api'
import util from "../utils/util";
export default {
    data() {
      return {
          form:{
              username:'',
              password:''
          }
      };
    },
    methods: {
        login(){
            window.localStorage.setItem('isLogin',true);
            this.$router.push({name:'home'})
             api.islogin({})
                .then(data => {
                    var _data = util.formatJson(data);
                    if (_data.err_code == 0) {
                        if(_data.data.is_login=='y')
                        self.$router.push({name:'home'})
                        
                    }else if(_data.err_code==1){
                        self.$message.error({
                            message: _data.err_msg
                        });
                        self.$router.push({name:'home'});
                    }
                })
                .catch(error => {
                    self.$message.error({
                    message: "未知错误,请联系管理员！"
                    });
                });
        }
    }
}
</script>
<style lang="scss" scoped>
@mixin relative {
  position: relative;
  width: 100%;
  height: 100%;
}
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
.login-container {
  @include relative;
  height: 100vh;
  background-color: $bg;
  input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
    -webkit-text-fill-color: #fff !important;
  }
  input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: $light_gray;
    height: 47px;
  }

  .login-form .el-input-group__append {
    padding: 0;
  }
  .login-form .el-input-group__append > img {
    height: 47px;
    display:block;
    cursor:pointer;
  }

  .login-form {
    position: absolute;
    left: 0;
    right: 0;
    width: 400px;
    padding: 35px 35px 15px 35px;
    margin: 120px auto;
  }
 .title {
    font-size: 26px;
    font-weight: 400;
    color: #eee;
    margin: 0px auto 40px auto;
    text-align: center;
    font-weight: bold;
}
  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
// .login-container{
    //     width: 100%;
    // height: 100%;
    // height: 100vh;
    // background-color: #2d3a4b;
    // .login-form{
    //     position: absolute;
    //     left: 0;
    //     right: 0;
    //     width: 400px;
    //     padding: 35px 35px 15px 35px;
    //     margin: 120px auto;
    //     color:#fff;
    //     .title{
    //             text-align: center;
    //             font-size: 38px;
    //     }
    //     .login-btn{
    //         width: 100%;
    //     }
    // }
    
// }
</style>


