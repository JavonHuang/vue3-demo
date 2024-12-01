<template>
  <el-dropdown
  :class="cls"
  >
    <slot></slot>
  </el-dropdown>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElDropdown} from 'element-plus'
import 'element-plus/theme-chalk/el-dropdown.css'
import { DropdownProps } from './dropdown';

defineOptions({
  name:'SkyDropdown'
})
defineProps<DropdownProps>()
const ns = useName('dropdown')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>