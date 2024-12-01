<template>
  <el-anchor
  :class="cls"
  >
    <slot></slot>
  </el-anchor>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElAnchor} from 'element-plus'
import 'element-plus/theme-chalk/el-anchor.css'
import { AnchorProps } from './anchor';

defineOptions({
  name:'SkyAnchor'
})
defineProps<AnchorProps>()
const ns = useName('anchor')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>