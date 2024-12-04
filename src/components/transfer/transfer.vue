<template>
  <el-transfer
    v-bind="$attrs"
    :class="cls"
  >
    <slot></slot>
  </el-transfer>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTransfer } from 'element-plus'
import 'element-plus/theme-chalk/el-transfer.css'

defineOptions({
  name:'ThTransfer'
})
defineProps()

const ns = useName('transfer')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>