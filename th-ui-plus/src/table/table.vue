<template>
  <el-table
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-table>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTable } from 'element-plus'


defineOptions({
  name:'ThTable'
})
defineProps()
const ns = useName('table')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>