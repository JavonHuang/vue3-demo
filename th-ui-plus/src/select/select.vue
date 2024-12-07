<template>
  <el-select
    v-bind="$attrs"
    :class="cls"
  >
    <el-option v-for="item in props.options" :label="item.label" :value="item.value"></el-option>
    <slot></slot>
  </el-select>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElSelect,ElOption } from 'element-plus'

interface Ioptions{label:string,value:string | number | boolean | Record<string, any>}

defineOptions({
  name:'ThSelect'
})
const props=defineProps({
  options:{
    type:Array<Ioptions>
  }
})
const ns = useName('select')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>