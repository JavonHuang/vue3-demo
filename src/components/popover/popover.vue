<template>
  <el-popover
    v-bind="$attrs"
    :class="cls"
  >

  </el-popover>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElPopover } from 'element-plus'
import 'element-plus/theme-chalk/el-popover.css'

defineOptions({
  name:'ThPopover'
})
defineProps()

const ns = useName('popover')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>