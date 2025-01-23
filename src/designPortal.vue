<template>
  <div class="portal">
    <div class="header">879</div>
    <div class="main">
      <div class="menu">
        <div class="group" v-for="item in libShow" :key="item.groupName">
          <div class="group-name">{{item.groupName}}</div>
          <div class="group-list">
            <div class="component" v-for="com in item.components" :key="com.name" >
              <div class="component-icon" v-drag:target="true" :code="com.code" v-on:mousedown="onclick(com.code)" v-bind="com?.props">
                <th-icon>
                  <Document/>
                </th-icon>
              </div>
              <div class="com-name">{{com.name}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="contant">
        <RouterView ></RouterView>
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { Document } from '@element-plus/icons-vue'
import { libShow } from '@/tool/libShow'
import { useDesignStore } from '@/store/useDesignStore'
const store = useDesignStore()
const {setDragNode,removeNode }=store

const onclick = (e:string) => { 
  setDragNode(e)
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
      .group{
        padding: 8px 10px;
        .group-name{
          font-weight: bold;
          text-align: left;
          padding: 8px 10px;
        }
        .group-list{
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          .component{
            width: 60px;
            cursor: pointer;
            margin: 2px;
            .component-icon{
              border: 1px solid #DCDFE6;
              border-radius: 4px;
              cursor: pointer;
              display: flex;
              height: 32px;
              i{
                margin: auto;
              }
            }
          }
        }
      }
    }
    .contant{
      flex-grow: 1;
      flex: 1;
      padding: 12px 20px;
      overflow: auto;
      display: flex;
      flex-direction: column;
    }
  }
}
</style>