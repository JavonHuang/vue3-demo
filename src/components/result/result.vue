<template>
  <el-result
    v-bind="$attrs"
    :class="cls"
  >

  </el-result>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElResult } from 'element-plus'
import 'element-plus/theme-chalk/el-result.css'
import { ResultProps } from './result';

defineOptions({
  name:'SkyResult'
})
defineProps<ResultProps>()

const ns = useName('result')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>