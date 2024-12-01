<template>
  <el-color-picker
    v-bind="$attrs"
    :class="cls"
  >
  </el-color-picker>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElColorPicker } from 'element-plus'
import 'element-plus/theme-chalk/el-color-picker.css'
import { ColorPickerProps } from './colorPicker';

defineOptions({
  name:'SkyColorPicker'
})
defineProps<ColorPickerProps>()

const ns = useName('color-picker')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>