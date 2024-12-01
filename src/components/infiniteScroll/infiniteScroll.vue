<template>
  <el-infinite-scroll
    v-bind="$attrs"
    :class="cls"
  >

  </el-infinite-scroll>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElInfiniteScroll} from 'element-plus'
import 'element-plus/theme-chalk/el-image.css'
import { InfiniteScrollProps } from './infiniteScroll';

defineOptions({
  name:'SkyInfiniteScroll'
})
defineProps<InfiniteScrollProps>()

const ns = useName('infinite-scroll')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>