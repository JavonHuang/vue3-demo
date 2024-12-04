<template>
  <el-tooltip
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-tooltip>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTooltip } from 'element-plus'
import 'element-plus/theme-chalk/el-tooltip.css'

defineOptions({
  name:'ThTooltip'
})
defineProps()

const ns = useName('tooltip')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>