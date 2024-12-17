<template>
  <div :class="cls">
    <th-form ref="ruleFormRef" :rules="props.rules" :model="ruleFormModel" :label-width="props.labelWidth">
      <th-form-item v-for="item in columns" :class="getFormItemClass(item)" :key="item.prop"
        :label="item.label" :prop="item.prop">
        <slot :name="item.prop" :data="item" :formData="ruleFormModel" v-if="item.slot"></slot>
        <component :is="item.component" v-bind="item.props" v-on="item.event??{}" v-model="ruleFormModel[item.prop]" v-else></component>
      </th-form-item>
    </th-form>
    <div>
      <th-button :type="'primary'" v-on:click="submit">提交</th-button>
      <th-button :type="'warning'" v-on:click="resetForm">重置</th-button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import {computed, nextTick, onMounted, ref, watch } from 'vue'
import { useName } from "../hook/useName"
import { FormAutoColumnsProps } from './formAuto';
import { FormInstance } from 'element-plus';
import { ThRef } from '../global';
import * as _ from 'lodash';

defineOptions({
  name: 'ThTormAuto'
})
interface IFormAuto{
  labelWidth?:number,
  showCount?:number,
  columns?:Array<FormAutoColumnsProps>,
  modelValue?:any,
  rules?:any
}
const props = withDefaults(defineProps<IFormAuto>(), {
  labelWidth: 80,
  columns:()=>[],
  modelValue:{},
  rules:{}
})

//样式处理
const ns = useName('form-auto')
const cls = computed(() => [
  ns.base(),
])
const getFormItemClass=(e:FormAutoColumnsProps)=>{
  return [
    ns.is(`flex-${e.span??24}`),
  ]
}

//变量声明
const columns = ref<Array<FormAutoColumnsProps>>([]);
const ruleFormModel = ref<any>({})
const ruleFormRef = ref<ThRef<FormInstance>>()

onMounted(() => {
  nextTick(() => {
    init()
  })
})

const init = () => {
  ruleFormModel.value =  _.cloneDeep(props.modelValue ?? {})
  columns.value = _.cloneDeep(props.columns ?? [])
  columns.value.forEach((e) => {
    e.props ?? (e.props = {})
    switch (e.component) {
      case 'ThInput':
        e.props.placeholder = `请输入${e.label}`
        break;
      case 'ThSelect':
        e.props.placeholder = `请选择${e.label}`
        break;
      case 'ThDatePicker':
        e.props.placeholder = `请选择${e.label}`
        break;
    }
  })
}

const submit=()=>{
  ruleFormRef.value!.getRef().validate((valid) => {
    if (valid) {
      emits("onSubmit", ruleFormModel)
    }
  })
}

const resetForm = () => {
  if (!ruleFormRef.value) return
  ruleFormRef.value.getRef().resetFields()
  emits("update:modelValue", ruleFormModel.value)
}

// 监听变化
watch(() => props.columns, () => {
  init()
}, { deep: true });

watch(() => ruleFormModel.value, (newVal) => {
  emits("update:modelValue", newVal)
}, { deep: true })

const emits = defineEmits<{
  (e:'onSubmit',val:any):void
  (e:'update:modelValue',val:any):void
}>()

</script>

<style lang='scss' scoped>

</style>