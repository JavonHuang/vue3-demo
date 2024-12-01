<template>
  <el-progress
    v-bind="$attrs"
    :class="cls"
  >

  </el-progress>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElProgress } from 'element-plus'
import 'element-plus/theme-chalk/el-progress.css'
import { ProgressProps } from './progress';

defineOptions({
  name:'SkyProgress'
})
defineProps<ProgressProps>()

const ns = useName('progress')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>