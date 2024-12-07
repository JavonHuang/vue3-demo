<template>
  <el-collapse
  :class="cls"
  >
    <slot></slot>
  </el-collapse>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElCollapse } from 'element-plus'


defineOptions({
  name:'ThCollapse'
})
defineProps()
const ns = useName('collapse')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>