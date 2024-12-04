<template>
  <el-backtop
  :class="cls"
  >
    <slot></slot>
  </el-backtop>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElBacktop} from 'element-plus'
import 'element-plus/theme-chalk/el-backtop.css'

defineOptions({
  name:'ThBacktop'
})
defineProps()
const ns = useName('backtop')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>