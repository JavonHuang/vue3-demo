<template>
  <el-input-number
    v-bind="$attrs"
    :class="cls"
  ></el-input-number>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElInputNumber } from 'element-plus'


defineOptions({
  name:'ThInputNumber'
})
defineProps()

const ns = useName('input-number')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>