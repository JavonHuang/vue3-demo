<template>
  <div class="login">
    <div class="main">
      <sky-input v-model="useInfo.name" :prefix-icon="User" placeholder="请输入用户名"></sky-input>
      <sky-input v-model="useInfo.passworld" type="password" :prefix-icon="Lock" placeholder="请输入密码"></sky-input>
      <sky-button type="primary" v-on:click="login">登陆</sky-button>
      <sky-button>88989</sky-button>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { User, Lock } from '@element-plus/icons-vue'
import { useGlobalStore } from "@/store/useGlobalStore"
import { router } from '@/router/index'
import { reactive} from 'vue';
const useInfo=reactive<{ name: string, passworld: string}>({name:"",passworld:""})
const globalStore = useGlobalStore()
const login = () => {
  globalStore.login(useInfo).then(() => {
    router.push({
      path: "/home_use",
      query: {

      },
    })
  })
}
</script>
<style lang='scss' scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('./assets/bg.jpeg') 100% 100%;
  background-size: cover;
  /* 背景图片大小自适应 */
  background-position: center;
  /* 背景图片居中 */
  background-repeat: no-repeat;
  /* 背景图片不重复 */
  display: flex;

  .main {
    border-radius: 16px;
    background-color: rgba(255, 255, 255, 0.6);
    width: 300px;
    margin: auto;
    padding: 20px 16px;
    box-sizing: border-box;
    .el-input {
      margin-bottom: 20px;
      border-radius: 4px;
     
    }

    .el-button {
      width: 100%;
    }
  }
}
</style>
