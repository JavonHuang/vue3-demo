<template>
  <el-date-picker 
    format="YYYY-MM-DD"
    value-format='x'
    v-bind="$attrs"
    :class="cls"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name v-bind="slotData || {}"></slot>
    </template>
  </el-date-picker>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElDatePicker } from 'element-plus'


defineOptions({
  name:'ThDatePicker'
})
defineProps()

const ns = useName('date-picker')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>