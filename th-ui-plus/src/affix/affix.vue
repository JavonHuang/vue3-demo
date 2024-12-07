<template>
  <el-affix
  :class="cls"
  >
    <slot></slot>
  </el-affix>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElAffix} from 'element-plus'


defineOptions({
  name:'ThAffix'
})
const ns = useName('affix')
const cls = computed(() => [
  ns.base(),
])
 defineProps({
  time: {
    type: Number,
    default: 1000
  },
  tip: {
    type: String,
    default: ""
  },
  placement: {
    type: String,
    default: "top"
  },
  tipProps: {
    type: Object,
    default: () => ({})
  },
  isDebounce: {
    type: Boolean,
    default: true
  }
})
</script>

<style lang='scss' scoped>

</style>