<template>
  <el-popconfirm
    v-bind="$attrs"
    :class="cls"
  >

  </el-popconfirm>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElPopconfirm } from 'element-plus'
import 'element-plus/theme-chalk/el-popconfirm.css'

defineOptions({
  name:'ThPopconfirm'
})
defineProps()

const ns = useName('popconfirm')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>