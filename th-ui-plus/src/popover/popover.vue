<template>
  <el-popover
    v-bind="$attrs"
    :class="cls"
  >
    <template v-for="(_, name) in $slots" #[name]="slotData">
      <slot :name v-bind="slotData || {}"></slot>
    </template>
  </el-popover>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElPopover } from 'element-plus'


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