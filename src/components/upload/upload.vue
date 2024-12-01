<template>
  <el-upload
    v-bind="$attrs"
    :class="cls"
  ></el-upload>
</template>

<script setup lang='ts'>
import {defineOptions,computed } from 'vue'
import {useName} from "../hook/useName"
import { ElUpload } from 'element-plus'
import 'element-plus/theme-chalk/el-upload.css'
import { UploadProps } from './upload';

defineOptions({
  name:'SkyUpload'
})
defineProps<UploadProps>()

const ns = useName('upload')
const cls = computed(() => [
  ns.base(),
])
</script>
