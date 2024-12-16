<template>
  <el-table
    v-bind="$attrs"
    :class="cls"
    ref="tableRef"
  >
    <!-- <template v-for="(_, name) in slots" #[name]="slotData">
      <slot :name v-bind="slotData || {}"></slot>
    </template> -->
    <slot></slot>
  </el-table>
</template>

<script setup lang='ts'>
import {defineOptions,computed, ref } from 'vue'
import {useName} from "../hook/useName"
import { ElTable, TableInstance } from 'element-plus'
defineOptions({
  name:'ThTable'
})
defineProps()
const ns = useName('table')
const cls = computed(() => [
  ns.base(),
])
const tableRef = ref<TableInstance>()
defineExpose({
  getRef:()=>tableRef.value
});
</script>

<style lang='scss' scoped>

</style>