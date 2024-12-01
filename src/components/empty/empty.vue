<template>
  <el-empty
    v-bind="$attrs"
    :class="cls"
  >

  </el-empty>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElEmpty } from 'element-plus'
import 'element-plus/theme-chalk/el-empty.css'
import { EmptyProps } from './empty';

defineOptions({
  name:'SkyEmpty'
})
defineProps<EmptyProps>()

const ns = useName('empty')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>