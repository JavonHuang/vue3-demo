<template>
  <el-dropdown-item
  :class="cls"
  >
    <slot></slot>
  </el-dropdown-item>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElDropdownItem} from 'element-plus'


defineOptions({
  name:'ThDropdownItem'
})
defineProps()
const ns = useName('dropdown-item')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>