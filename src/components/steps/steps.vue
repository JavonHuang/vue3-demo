<template>
  <el-steps
    v-bind="$attrs"
    :class="cls"
  >

  </el-steps>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElSteps } from 'element-plus'
import 'element-plus/theme-chalk/el-steps.css'
import { StepsProps } from './steps';

defineOptions({
  name:'SkyPageHeader'
})
defineProps<StepsProps>()

const ns = useName('steps')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>