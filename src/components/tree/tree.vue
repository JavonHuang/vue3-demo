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
import 'element-plus/theme-chalk/el-tree.css'
import { TreeProps } from './tree';

defineOptions({
  name:'SkyTour'
})
defineProps<TreeProps>()

const ns = useName('tree')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>