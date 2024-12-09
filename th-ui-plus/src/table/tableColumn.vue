<template>
  <el-table-column
    v-bind="$attrs"
    :class="cls"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name v-bind="slotData || {}"></slot>
    </template>
  </el-table-column>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTableColumn } from 'element-plus'


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