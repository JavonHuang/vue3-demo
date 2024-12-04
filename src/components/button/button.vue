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
import { ElButton } from 'element-plus'
import 'element-plus/theme-chalk/el-button.css'

defineOptions({
  name:'ThButton'
})
defineProps({
  mytext: {
      type:String,
      required: false
  },
})

import { useAttrs } from 'vue'
const attrs:any = useAttrs()
const ns = useName('button')

const cls = computed(() => [
  ns.base(),
  ns.is(attrs.type??''),
  ns.is(attrs.size??'default'),
])


</script>