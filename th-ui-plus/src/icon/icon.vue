<template>
  <el-icon v-bind="props" :class="cls">
    <slot></slot>
  </el-icon>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElIcon } from 'element-plus'

import type { IconProps } from 'element-plus';
type IProps={
  [key: string]: any;
} & IconProps
defineOptions({
  name:'ThIcon'
})
const props=defineProps<IProps>()

const ns = useName('icon')
const cls = computed(() => [
  ns.base(),
  props.class,
])
console.log(cls)
</script>