<template>
  <el-date-picker
    v-bind="$attrs"
    :class="cls"
  >

  </el-date-picker>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElDatePicker } from 'element-plus'
import 'element-plus/theme-chalk/el-date-picker.css'

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