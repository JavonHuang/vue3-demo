<template>
  <el-breadcrumb
    v-bind="$attrs"
    :class="cls"
  >    
    <slot></slot>
  </el-breadcrumb>
</template>

<script setup lang='ts'>
import { computed,defineOptions,defineProps } from 'vue'
import {useName} from "../hook/useName"
import { ElBreadcrumb } from 'element-plus'
import 'element-plus/theme-chalk/el-breadcrumb.css'

defineOptions({
  name:'ThBreadcrumb'
})
defineProps()
const ns = useName('breadcrumb')

const cls = computed(() => [
  ns.base(),
])


</script>