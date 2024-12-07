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


defineOptions({
  name:'ThColorPicker'
})
defineProps()

const ns = useName('color-picker')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>