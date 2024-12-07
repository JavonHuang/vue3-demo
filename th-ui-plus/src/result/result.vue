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


defineOptions({
  name:'ThResult'
})
defineProps()

const ns = useName('result')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>