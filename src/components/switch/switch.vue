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
import 'element-plus/theme-chalk/el-switch.css'
import { SwitchProps } from './switch';

defineOptions({
  name:'SkySwitch'
})
defineProps<SwitchProps>()
const ns = useName('switch')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>