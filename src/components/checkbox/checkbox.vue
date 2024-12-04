<template>
  <el-checkbox
    v-bind="$attrs"
    :class="cls"
  >
  </el-checkbox>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElCheckbox } from 'element-plus'
import 'element-plus/theme-chalk/el-checkbox.css'

defineOptions({
  name:'ThCheckbox'
})
defineProps()
const ns = useName('checkbox')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>