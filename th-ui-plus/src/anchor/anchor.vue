<template>
  <el-anchor
  :class="cls"
  >
    <slot></slot>
  </el-anchor>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElAnchor} from 'element-plus'


defineOptions({
  name:'ThAnchor'
})
defineProps()
const ns = useName('anchor')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>