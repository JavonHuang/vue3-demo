<template>
  <el-rate
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-rate>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElRate } from 'element-plus'


defineOptions({
  name:'ThRate'
})
defineProps()

const ns = useName('rate')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>