<template>
  <el-table-v2
    v-bind="$attrs"
    :class="cls"
  ></el-table-v2>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElTableV2 } from 'element-plus'
import 'element-plus/theme-chalk/el-table-v2.css'
import { TableV2Props } from './tableV2';

defineOptions({
  name:'SkyTableV2'
})
defineProps<TableV2Props>()

const ns = useName('table-v2')
const cls = computed(() => [
  ns.base(),
])
</script>
