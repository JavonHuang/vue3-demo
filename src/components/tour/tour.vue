<template>
  <el-tour
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-tour>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTour } from 'element-plus'
import 'element-plus/theme-chalk/el-tour.css'
import { TourProps } from './tour';

defineOptions({
  name:'SkyTour'
})
defineProps<TourProps>()

const ns = useName('tour')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>