<template>
  <el-menu-item v-bind="$attrs" :class="cls">
    <slot></slot>
  </el-menu-item>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElMenuItem } from 'element-plus'
import 'element-plus/theme-chalk/el-menu-item.css'
defineOptions({
  name:'SkyMenuItem'
})
const ns = useName('row')
const cls = computed(() => [
  ns.base(),
])
</script>