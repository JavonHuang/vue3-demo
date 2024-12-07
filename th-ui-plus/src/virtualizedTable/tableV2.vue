<template>
  <el-table-v2 :class="cls" v-bind="props"></el-table-v2>
</template>

<script setup lang='ts'>
import { defineOptions, computed } from 'vue'
import { useName } from "../hook/useName"
import { ElTableV2 } from 'element-plus'

import type { TableV2Props } from 'element-plus';

defineOptions({
  name: 'ThTableV2'
})
const props=defineProps<TableV2Props>()

const ns = useName('table-v2')
const cls = computed(() => [
  ns.base(),
])
</script>
