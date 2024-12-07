<template>
  <el-form
    v-bind="props"
    :class="cls"
    ref="tform"
  >
    <slot></slot>
  </el-form>
</template>

<script setup lang='ts'>
import {defineOptions,computed, ref } from 'vue'
import {useName} from "../hook/useName"
import { ElForm } from 'element-plus'

import type { FormProps } from 'element-plus';

type IProps={
  [key: string]: any;
} & FormProps

defineOptions({
  name:'ThForm'
})
const props=defineProps<IProps>()
const tform: any = ref<HTMLElement | null>(null)

const ns = useName('form')
const cls = computed(() => [
  ns.base(),
  ns.m(props.inline ?'inline':''),
])
defineExpose(tform);
</script>

<style lang='scss' scoped>

</style>