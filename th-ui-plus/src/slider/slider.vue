<template>
  <el-slider
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-slider>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElSlider } from 'element-plus'


defineOptions({
  name:'ThSlider'
})
defineProps()
const ns = useName('slider')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>