<template>
  <el-tag
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-tag>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTag } from 'element-plus'


defineOptions({
  name:'ThTag'
})
defineProps()
const ns = useName('tag')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>