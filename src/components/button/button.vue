<template>
  <el-button 
    v-bind="$attrs"
    :class="cls"
  >    
    <slot></slot>
  </el-button>
</template>

<script setup lang='ts'>
import { computed,defineOptions,defineProps } from 'vue'
import {useName} from "../hook/useName"
import { ButtonProps } from './button';
import { ElButton } from 'element-plus'
import 'element-plus/theme-chalk/el-button.css'

defineOptions({
  name:'SkyButton'
})
defineProps<ButtonProps>()

import { useAttrs } from 'vue'
const attrs:any = useAttrs()
const ns = useName('button')

const cls = computed(() => [
  ns.base(),
  ns.is(attrs.type),
  ns.is(attrs.size),
])


</script>