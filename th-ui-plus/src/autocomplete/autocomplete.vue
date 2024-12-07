<template>
  <el-autocomplete
  :class="cls"
  >
    <slot></slot>
  </el-autocomplete>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElAutocomplete } from 'element-plus'


defineOptions({
  name:'ThAutocomplete'
})
defineProps()
const ns = useName('autocomplete')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>