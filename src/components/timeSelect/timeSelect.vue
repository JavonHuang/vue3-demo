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
import { TimeSelectProps } from './timeSelect';

defineOptions({
  name:'SkyTimeSelect'
})
defineProps<TimeSelectProps>()

const ns = useName('time-select')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>