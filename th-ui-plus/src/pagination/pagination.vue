<template>
  <el-pagination v-bind="$attrs" :class="cls"></el-pagination>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElPagination } from 'element-plus'

defineOptions({
  name:'ThPagination'
})
defineProps()

const ns = useName('pagination')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>