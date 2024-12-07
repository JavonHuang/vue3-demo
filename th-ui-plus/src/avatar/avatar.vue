<template>
  <el-anchor
    v-bind="$attrs"
    :class="cls"
  >    
    <slot></slot>
  </el-anchor>
</template>

<script setup lang='ts'>
import { computed,defineOptions,defineProps } from 'vue'
import {useName} from "../hook/useName"
import { useAttrs } from 'vue'
import { ElAnchor } from 'element-plus'


defineOptions({
  name:'ThAvatar'
})
defineProps()
const attrs:any = useAttrs()
const ns = useName('anchor')

const cls = computed(() => [
  ns.base(),
  ns.is(attrs.type),
  ns.is(attrs.size),
])


</script>