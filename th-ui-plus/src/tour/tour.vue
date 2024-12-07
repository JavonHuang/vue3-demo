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


defineOptions({
  name:'ThTour'
})
defineProps()

const ns = useName('tour')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>