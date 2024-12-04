<template>
  <el-descriptions-item
    v-bind="$attrs"
    :class="cls"
  >

  </el-descriptions-item>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElDescriptionsItem } from 'element-plus'
import 'element-plus/theme-chalk/el-descriptions-item.css'

defineOptions({
  name:'ThDescriptionsItem'
})
defineProps()

const ns = useName('descriptions-item')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>