<template>
  <el-time-select
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-time-select>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTimeSelect } from 'element-plus'
import 'element-plus/theme-chalk/el-time-select.css'

defineOptions({
  name:'ThTimeSelect'
})
defineProps()

const ns = useName('time-select')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>