<template>
  <el-drawer
    v-bind="$attrs"
    :class="cls"
  >

  </el-drawer>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElDrawer } from 'element-plus'


defineOptions({
  name:'ThDrawer'
})
defineProps()

const ns = useName('drawer')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>