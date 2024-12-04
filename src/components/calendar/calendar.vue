<template>
  <el-calendar
    v-bind="$attrs"
    :class="cls"
  >    
    <slot></slot>
  </el-calendar>
</template>

<script setup lang='ts'>
import { computed,defineOptions,defineProps } from 'vue'
import {useName} from "../hook/useName"
import { ElCalendar } from 'element-plus'
import 'element-plus/theme-chalk/el-calendar.css'

defineOptions({
  name:'ThCalendar'
})
defineProps()
const ns = useName('calendar')

const cls = computed(() => [
  ns.base(),
])


</script>