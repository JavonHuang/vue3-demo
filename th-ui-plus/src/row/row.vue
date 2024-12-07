<template>
  <el-row
    v-bind="$attrs"
    :class="cls"
  > 
    <slot></slot>
  </el-row>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElRow } from 'element-plus'


defineOptions({
  name:'ThRow'
})
defineProps()
const ns = useName('row')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>