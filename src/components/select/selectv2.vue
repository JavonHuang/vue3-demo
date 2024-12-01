<template>
  <el-select-v2
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-select-v2>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElSelectV2 } from 'element-plus'
import 'element-plus/theme-chalk/el-select-v2.css'
import { SelectV2Props } from './selectv2';

defineOptions({
  name:'SkySelectV2'
})
defineProps<SelectV2Props>()
const ns = useName('select-v2')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>