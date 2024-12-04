<template>
  <el-card
    v-bind="$attrs"
    :class="cls"
  >    
    <slot></slot>
  </el-card>
</template>

<script setup lang='ts'>
import { computed,defineOptions,defineProps } from 'vue'
import {useName} from "../hook/useName"
import { ElCard } from 'element-plus'
import 'element-plus/theme-chalk/el-card.css'

defineOptions({
  name:'ThCard'
})
defineProps()
const ns = useName('card')

const cls = computed(() => [
  ns.base(),
])


</script>