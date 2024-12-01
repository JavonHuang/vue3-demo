<template>
  <el-watermark
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-watermark>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElWatermark } from 'element-plus'
import 'element-plus/theme-chalk/el-tooltip.css'
import { WatermarkProps } from './watermark';

defineOptions({
  name:'SkyWatermark'
})
defineProps<WatermarkProps>()

const ns = useName('watermark')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>