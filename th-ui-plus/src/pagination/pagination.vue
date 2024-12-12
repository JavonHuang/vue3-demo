<template>
  <el-config-provider :locale="zhCn">
    <el-pagination
      v-bind="$attrs"
      :class="cls"
    >
    </el-pagination>
  </el-config-provider>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElPagination,ElConfigProvider, } from 'element-plus'
import zhCn from "./../config"

defineOptions({
  name:'ThPagination'
})
defineProps()

const ns = useName('pagination')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>