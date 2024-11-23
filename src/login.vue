<template>
  <div>
    <el-button v-on:click="login">登陆</el-button>
  </div>
</template>
<script setup lang='ts'>
import { useRouter } from 'vue-router'
import {router as myrouter} from './router'

import request from '@/api/commonApi';
const router = useRouter()

const login=()=>{
  request.login({name:"",passworld:""}).then((e)=>{
    e.data.forEach((item:any) => {
      myrouter.addRoute({
        path:item.url,
        name: item.name,
        component:()=>import(item.path)
      });
    });
      router.push({
      path:"/home_use",
      query: {
      
      },
    })
  });
}
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
