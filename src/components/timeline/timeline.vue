<template>
  <el-timeline
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-timeline>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTimeline } from 'element-plus'
import 'element-plus/theme-chalk/el-time-line.css'
import { TimelineProps } from './timeline';

defineOptions({
  name:'SkyTimeline'
})
defineProps<TimelineProps>()
const ns = useName('timeline')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>