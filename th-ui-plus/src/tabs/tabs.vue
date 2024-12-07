<template>
  <el-tabs
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-tabs>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTabs } from 'element-plus'


defineOptions({
  name:'ThTabs'
})
defineProps()
const ns = useName('tabs')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>