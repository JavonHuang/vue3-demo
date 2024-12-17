<template>
  <el-form v-bind="$attrs" v-bind:inline="props.inline" :class="cls" ref="ruleFormRef">
    <slot></slot>
  </el-form>
</template>

<script setup lang='ts'>
import { defineOptions, computed, ref } from 'vue'
import { useName } from "../hook/useName"
import { ElForm, FormInstance } from 'element-plus'

interface IProps {
  inline?:boolean
} 

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