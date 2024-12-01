<template>
  <el-badge
    v-bind="$attrs"
    :class="cls"
  >    
    <slot></slot>
  </el-badge>
</template>

<script setup lang='ts'>
import { computed,defineOptions,defineProps } from 'vue'
import {useName} from "../hook/useName"
import { ElBadge } from 'element-plus'
import 'element-plus/theme-chalk/el-badge.css'
import { BadgeProps } from './badge'

defineOptions({
  name:'SkyAnchor'
})
defineProps<BadgeProps>()
const ns = useName('anchor')

const cls = computed(() => [
  ns.base(),
])


</script>