<template>
  <el-table-column
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-table-column>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTableColumn } from 'element-plus'
import 'element-plus/theme-chalk/el-table-column.css'

defineOptions({
  name:'ThTableColumn'
})
defineProps()
const ns = useName('table-column')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>