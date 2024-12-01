<template>
  <el-carousel
    v-bind="$attrs"
    :class="cls"
  >    
    <slot></slot>
  </el-carousel>
</template>

<script setup lang='ts'>
import { computed,defineOptions,defineProps } from 'vue'
import {useName} from "../hook/useName"
import { ElCarousel} from 'element-plus'
import 'element-plus/theme-chalk/el-carousel.css'
import { CarouselProps } from './carousel'

defineOptions({
  name:'SkyCarousel'
})
defineProps<CarouselProps>()
const ns = useName('carousel')

const cls = computed(() => [
  ns.base(),
])


</script>