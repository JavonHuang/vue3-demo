<template>
  <el-affix
  :class="cls"
  >
    <slot></slot>
  </el-affix>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElAffix} from 'element-plus'
import 'element-plus/theme-chalk/el-affix.css'
import { AffixProps } from './affix';

defineOptions({
  name:'SkyAffix'
})
defineProps<AffixProps>()
const ns = useName('affix')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>