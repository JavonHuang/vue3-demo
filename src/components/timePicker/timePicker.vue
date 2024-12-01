<template>
  <el-time-picker
    v-bind="$attrs"
    :class="cls"
  ></el-time-picker>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTimePicker } from 'element-plus'
import 'element-plus/theme-chalk/el-time-picker.css'
import { TimePickerProps } from './timePicker';

defineOptions({
  name:'SkyTimePicker'
})
defineProps<TimePickerProps>()
const ns = useName('time-picker')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>