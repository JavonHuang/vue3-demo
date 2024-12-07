<template>
  <el-statistic
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-statistic>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElStatistic } from 'element-plus'


defineOptions({
  name:'ThStatistic'
})
defineProps()

const ns = useName('statistic')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>