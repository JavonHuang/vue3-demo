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


defineOptions({
  name:'ThTimePicker'
})
defineProps()
const ns = useName('time-picker')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>