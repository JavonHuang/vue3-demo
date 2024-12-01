<template>
  <el-tree-v2
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-tree-v2>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTreeV2 } from 'element-plus'
import 'element-plus/theme-chalk/el-tree-v2.css'
import { TreeV2Props } from './treeV2';

defineOptions({
  name:'SkyTreeV2'
})
defineProps<TreeV2Props>()

const ns = useName('tree-v2')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>