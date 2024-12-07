<template>
  <el-switch
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-switch>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElSwitch } from 'element-plus'


defineOptions({
  name:'ThSwitch'
})
defineProps()
const ns = useName('switch')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>