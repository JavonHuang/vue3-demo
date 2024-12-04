<template>
  <el-segmented
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-segmented>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElSegmented } from 'element-plus'
import 'element-plus/theme-chalk/el-segmented.css'

defineOptions({
  name:'ThSegmented'
})
defineProps()

const ns = useName('Segmented')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>