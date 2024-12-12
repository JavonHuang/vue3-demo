<template>
  <div :class="cls">
    <slot></slot>
  </div>
</template>

<script setup lang='ts'>
import {defineOptions,computed,PropType } from 'vue'
import {useName} from "../hook/useName"
import { IProps } from './pageLayout';
defineOptions({
  name:'ThPageLayout'
})
const props=withDefaults(defineProps<IProps>(),{
  direction:'row',
})

const ns = useName('page-layout')
const cls = computed(() => [
  ns.base(),
  ns.m(props.direction)
])
</script>

<style lang='scss' scoped>

</style>