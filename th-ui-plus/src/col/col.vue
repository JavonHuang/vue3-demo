<template>
  <el-col
  :class="cls"
  >
    <slot></slot>
  </el-col>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElCol } from 'element-plus'


defineOptions({
  name:'ThCol'
})
defineProps()

const ns = useName('col')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>