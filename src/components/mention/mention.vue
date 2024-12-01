<template>
  <el-mention
    v-bind="$attrs"
    :class="cls"
  ></el-mention>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElMention } from 'element-plus'
import 'element-plus/theme-chalk/el-mention.css'
import { MentionProps } from './mention';

defineOptions({
  name:'SkyMention'
})
defineProps<MentionProps>()

const ns = useName('el-mention')
const cls = computed(() => [
  ns.base(),
])

</script>

<style lang='scss' scoped>

</style>