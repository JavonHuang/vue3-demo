<template>
  <el-icon v-bind="$attrs" :class="cls">
    <slot></slot>
  </el-icon>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElIcon } from 'element-plus'
import 'element-plus/theme-chalk/el-icon.css'
defineOptions({
  name:'ThIcon'
})
defineProps()

const ns = useName('row')
const cls = computed(() => [
  ns.base(),
])
</script>