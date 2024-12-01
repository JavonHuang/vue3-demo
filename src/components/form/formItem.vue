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
import { FormItemProps } from './formItem';

defineOptions({
  name:'SkyFormItem'
})
defineProps<FormItemProps>()

const ns = useName('form-item')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>