<template>
  <el-descriptions
    v-bind="$attrs"
    :class="cls"
  >

  </el-descriptions>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElDescriptions } from 'element-plus'
import 'element-plus/theme-chalk/el-descriptions.css'
import { DescriptionsProps } from './descriptions';

defineOptions({
  name:'SkyDescriptions'
})
defineProps<DescriptionsProps>()

const ns = useName('descriptions')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>