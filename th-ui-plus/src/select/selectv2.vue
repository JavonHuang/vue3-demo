<template>
  <el-select-v2 v-bind="$attrs" :class="cls" :options="props.options">
    <slot></slot>
  </el-select-v2>
</template>

<script setup lang='ts'>
import { defineOptions, computed } from 'vue'
import { useName } from "../hook/useName"
import { ElSelectV2 } from 'element-plus'

import { OptionType } from 'element-plus/es/components/select-v2/src/select.types';

defineOptions({
  name: 'ThSelectV2'
})
const props = defineProps({
  options: {
    type: Array<OptionType>,
    default: () => []
  }
})
const ns = useName('select-v2')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped></style>