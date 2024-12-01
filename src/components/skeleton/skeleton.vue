<template>
  <el-skeleton
    v-bind="$attrs"
    :class="cls"
  >

  </el-skeleton>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElSkeleton } from 'element-plus'
import 'element-plus/theme-chalk/el-skeleton.css'
import { SkeletonProps } from './skeleton';

defineOptions({
  name:'SkySkeleton'
})
defineProps<SkeletonProps>()

const ns = useName('skeleton')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>