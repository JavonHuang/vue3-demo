<template>
  <el-dialog
    v-bind="$attrs"
    :class="cls"
  >

  </el-dialog>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElDialog } from 'element-plus'
import 'element-plus/theme-chalk/el-dialog.css'
import { DialogProps } from './dialog';

defineOptions({
  name:'SkyDialog'
})
defineProps<DialogProps>()

const ns = useName('dialog')
const cls = computed(() => [
  ns.base(),
])
</script>

<style lang='scss' scoped>

</style>