<template>
  <el-form
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-form>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElForm } from 'element-plus'
import 'element-plus/theme-chalk/el-form.css'
import { FormProps } from './form';

defineOptions({
  name:'SkyForm'
})
defineProps<FormProps>()

const ns = useName('form')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>