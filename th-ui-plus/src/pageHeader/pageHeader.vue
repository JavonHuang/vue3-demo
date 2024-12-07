<template>
  <el-page-header
    v-bind="$attrs"
    :class="cls"
  >

  </el-page-header>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElPageHeader } from 'element-plus'


defineOptions({
  name:'ThPageHeader'
})
defineProps()

const ns = useName('page-header')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>