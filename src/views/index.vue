<template>
    <el-container class="main-box">
        <el-header>
           <el-col :span="24" style="height: 60px;line-height: 60px;">
                <el-col :span="12" style="font-size:26px;    ">
                    <!-- <img src="../assets/logo.png" class="logo"> -->
                    <span style="padding-left:20px;color:#fff">vue-elem-admin<i style="color:#20a0ff"></i></span>
                    <i class="fa fa-navicon" style="cursor:pointer;" @click="menuShow"></i>
                </el-col>
                <el-col :span="12" style="text-align:right">
                    <span class="admin-text"><i class="fa fa-user" aria-hidden="true" style="margin-right:5px;"></i>欢迎：admin</span>
                    <el-dropdown class="tip-logout" style="padding:0px;margin-left:20px;">
                        <span class="el-dropdown-link" style="color:#fff;">
                        设置<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item><span @click="update_pwd"><i class="fa fa-edit"></i> 修改密码</span></el-dropdown-item>
                            <el-dropdown-item><span @click="logout"><i class="fa fa-sign-out"></i> 退出</span></el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </el-col>
            </el-col>
        </el-header>
         <el-container>
             <el-aside width="200px;">
                 <el-menu default-active="getNavMenu" class="el-menu-vertical-demo" @open="handleOpen"  @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :collapse="isCollapse" router>
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-tickets"></i>
                            <span>订单管理</span>
                        </template>
                        <el-menu-item index="2" :route="{name:'order_list'}">订单列表</el-menu-item>
                    </el-submenu>
                    <!-- <sys-menu :list_data="menu_list_data"></sys-menu> -->
                </el-menu>
             </el-aside>
            <el-main>
                <el-col :span="24" style="margin-bottom:15px;">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item :key="index" v-for="(item,index) in getNavLinks" :to="{ path: item.link }">
                            {{item.title}}
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </el-col>
                <el-col :span="24" class="main-panel-box">
                    <transition name="fade">
                        <router-view></router-view>
                    </transition>
                </el-col>
            </el-main>
         </el-container>
    </el-container>
</template>
<script>
import api from "../api";
import { mapGetters, mapActions } from "vuex";
export default {
    data() {
      return {
        menu_list_data:[],
        isCollapse: false,
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    components:{
        sysMenu:{
        name:'sysMenu',
        template:`<div>
                <el-submenu :index="value.id" :key="value.id" v-if="value.sub.length>0" v-for="(value,index) in list_data">
                    <template slot="title" ><i class="el-icon-menu"></i>{{value.menu_name}}</template>
                    <sys-menu :list_data="value.sub" v-if="value.sub.length>0"></sys-menu>
                </el-submenu>
                <el-menu-item v-for="(value,index) in list_data" v-if="value.sub.length==0" :key="value.flag" :index="value.flag" :route="{name:value.flag}">
                        <i class="el-icon-tickets"></i>{{value.menu_name}}</el-menu-item>
                </div>`,
        props:['list_data'],
        data(){
            return {};
        },
        computed:{
            has_children(){
            return this.list_data.length>0?true:false;
            }
        }
        }
    },
    computed: {
        ...mapGetters([
            'getNavLinks',
            "getUserInfo",
            "getNavMenu"
        ])
    },
    methods: {
        menuShow(){
            this.isCollapse=!this.isCollapse;
        },
        update_pwd(){

        },
        auth_menu(){
            var self = this;
            api.auth_menu({})
                .then((res)=>{
                    if(res.err_code==0){
                        self.menu_list_data=res.menu_list;
                    }else{
                        self.menu_list_data=[];
                    }
            })
        },
        logout(){
            window.localStorage.removeItem('isLogin');
            this.$router.push({name:'login'})
        },
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    },
    created: function() {
        var self = this;
        api.islogin({}).then((data) => {
            var _data = util.formatJson(data);
            if (_data.err_code == 0) {
                if(_data.data.is_login=='y'){
                    //self.$router.push({name:'home'})
                }else{
                    self.$router.push({name:'login'})
                }
            }else{
                self.$message.error({
                message: _data.message
            });
            }
        })
        .catch((error) => {
            self.$message.error({
                message: '未知错误,请联系管理员！'
            });
        });
        this.auth_menu();
    }
  }
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
</style>

