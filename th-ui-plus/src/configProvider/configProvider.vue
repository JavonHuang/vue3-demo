<template>
  <el-config-provider :locale="zhCn" namespace="th">
    <slot></slot>
  </el-config-provider>
</template>

<script setup lang='ts'>
import { ElConfigProvider } from 'element-plus'
import zhCn from "./../config"
defineOptions({
  name:'ThConfigProvider'
})
</script>

<style lang='scss' scoped>

</style>