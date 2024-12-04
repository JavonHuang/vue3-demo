<template>
  <el-input
    v-bind="$attrs"
    :class="cls"
  ></el-input>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElInput } from 'element-plus'
import 'element-plus/theme-chalk/el-input.css'

defineOptions({
  name:'ThInput'
})
defineProps()
const ns = useName('input')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>