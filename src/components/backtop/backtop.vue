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
import { BacktopProps } from './backtop';

defineOptions({
  name:'SkyBacktop'
})
defineProps<BacktopProps>()
const ns = useName('backtop')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>