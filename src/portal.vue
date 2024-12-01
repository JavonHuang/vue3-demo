<template>
  <div class="portal">
    <div class="header">879</div>
    <div class="main">
      <div class="menu">
        <sky-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <sky-menu-item v-for="item in systemMenu" :index="item.name" v-on:click="goPage(item)">
            <sky-icon>
              <Document />
            </sky-icon>
            <span>{{ item.name }}</span>
          </sky-menu-item>
        </sky-menu>
      </div>
      <div class="contant">
        <RouterView ></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { Document } from '@element-plus/icons-vue'
import { useGlobalStore } from "@/store/useGlobalStore"
import { router } from '@/router/index'
import { storeToRefs } from "pinia";
const globalStore = useGlobalStore()
const { systemMenu } = storeToRefs(globalStore) // 把仓库中的数据变成响应式

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const goPage = (e: any) => {
  router.push({
    name: e.name,
  })
}
</script>

<style lang='scss' scoped>
.portal {
  height: 100%;
  width: 100%;
  background: #F2F3F5;
  display: flex;
  flex-direction: column;

  .header {
    height: 40px;
    border-bottom: 1px solid #DCDFE6;
    background-color: white;
  }

  .main {
    height: calc(100% - 40px);
    display: flex;
    flex-direction: row;

    .menu {
      width: 200px;
      border-right: 1px solid #DCDFE6;
      background-color: white;
      .el-menu {
        border: none;
      }
    }
    .contant{
      flex-grow: 1;
      padding: 12px 20px;
      overflow: auto;
     &>div{
        border-radius: 4px;
        background-color: white;
      }
    }
  }
}
</style>