<template>
  <el-radio
    v-bind="$attrs"
   :class="cls"
  >
    <slot></slot>
  </el-radio>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElRadio } from 'element-plus'


defineOptions({
  name:'ThRadio'
})
defineProps()

const ns = useName('radio')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>