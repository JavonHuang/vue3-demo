<template>
  <el-select
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-select>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElSelect } from 'element-plus'
import 'element-plus/theme-chalk/el-select.css'
import { SelectProps } from './select';

defineOptions({
  name:'SkySelect'
})
defineProps<SelectProps>()
const ns = useName('select')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>