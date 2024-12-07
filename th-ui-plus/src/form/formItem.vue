<template>
  <el-form-item
    :class="cls"
    v-bind="props"
  >
    <slot></slot>
  </el-form-item>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElFormItem } from 'element-plus'


defineOptions({
  name:'ThFormItem'
})
const props=defineProps({
  inline:{
    type:Boolean,
    default:false,
  },
})

const ns = useName('form-item')
const cls = computed(() => [
  ns.base(),
  ns.m(props.inline?'inline':''),
])
</script>

<style lang='scss' scoped>

</style>