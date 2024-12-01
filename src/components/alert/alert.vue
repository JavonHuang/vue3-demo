<template>
  <el-alert
  :class="cls"
  >
    <slot></slot>
  </el-alert>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElAlert} from 'element-plus'
import 'element-plus/theme-chalk/el-alert.css'
import { AlertProps } from './alert';

defineOptions({
  name:'SkyAlert'
})
defineProps<AlertProps>()
const ns = useName('alert')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>