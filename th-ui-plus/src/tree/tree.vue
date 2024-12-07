<template>
  <el-tree
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-tree>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTree } from 'element-plus'


defineOptions({
  name:'ThTree'
})
defineProps()

const ns = useName('tree')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>