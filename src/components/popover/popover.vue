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
import { PopoverProps } from './popover';

defineOptions({
  name:'SkyPopover'
})
defineProps<PopoverProps>()

const ns = useName('popover')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>