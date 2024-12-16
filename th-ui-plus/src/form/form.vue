<template>
  <el-form v-bind="props" :class="cls" ref="ruleFormRef">
    <slot></slot>
  </el-form>
</template>

<script setup lang='ts'>
import { defineOptions, computed, ref } from 'vue'
import { useName } from "../hook/useName"
import { ElForm, FormInstance } from 'element-plus'

import type { FormProps } from 'element-plus';

type IProps = {
  [key: string]: any;
} & FormProps

defineOptions({
  name: 'ThForm'
})
const props = defineProps<IProps>()
const ruleFormRef = ref<FormInstance>()

const ns = useName('form')
const cls = computed(() => [
  ns.base(),
  ns.m(props.inline ? 'inline' : ''),
])

defineExpose({
  getRef:()=>ruleFormRef.value
});

</script>

<style lang='scss' scoped></style>