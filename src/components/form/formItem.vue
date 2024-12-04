<template>
  <el-form-item
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-form-item>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElFormItem } from 'element-plus'
import 'element-plus/theme-chalk/el-form-item.css'

defineOptions({
  name:'ThFormItem'
})
const props=defineProps({
  inline:{
    type:Boolean,
    default:false,
  }
})

const ns = useName('form-item')
const cls = computed(() => [
  ns.base(),
  ns.m(props.inline?'inline':''),

])
</script>

<style lang='scss' scoped>

</style>