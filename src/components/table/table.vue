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
import 'element-plus/theme-chalk/el-table.css'
import { TableProps } from './table';

defineOptions({
  name:'SkyTable'
})
defineProps<TableProps>()
const ns = useName('table')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>