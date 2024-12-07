<template>
  <el-tree-select
    v-bind="$attrs"
    :class="cls"
  ></el-tree-select>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTreeSelect } from 'element-plus'


defineOptions({
  name:'ThTreeSelect'
})
defineProps()
const ns = useName('tree-select')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>