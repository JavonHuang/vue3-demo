<template>
  <el-link v-bind="$attrs" :class="cls">
    <slot></slot>
  </el-link>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElLink } from 'element-plus'


defineOptions({
  name:'ThLink'
})
defineProps()
const ns = useName('link')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>