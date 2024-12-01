<template>
  <el-tag
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-tag>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTag } from 'element-plus'
import 'element-plus/theme-chalk/el-tag.css'
import { TagProps } from './tag';

defineOptions({
  name:'SkyTag'
})
defineProps<TagProps>()
const ns = useName('tag')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>