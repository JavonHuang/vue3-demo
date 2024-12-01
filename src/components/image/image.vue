<template>
  <el-image
    v-bind="$attrs"
    :class="cls"
  >

  </el-image>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElImage } from 'element-plus'
import 'element-plus/theme-chalk/el-image.css'
import { ImageProps } from './image';

defineOptions({
  name:'SkyImage'
})
defineProps<ImageProps>()

const ns = useName('image')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>