<template>
  <div :class="cls">
    <th-form ref="ruleFormRef" :rules="props.rules" :style="{ height: isExpandHeight + 'px' }" :model="ruleFormModel" :label-width="props.labelWidth"
      :inline="props.inline">
      <th-form-item v-for="item in columns" :class="clsFormItem" :inline="props.inline" :key="item.prop"
        :label="item.label" :prop="item.prop">
        <slot :name="item.prop" :data="item" :formData="ruleFormModel" v-if="item.slot"></slot>
        <component :is="item.component" v-bind="item.props" v-on="item.event??{}" v-model="ruleFormModel[item.prop]" v-else></component>
      </th-form-item>
    </th-form>
    <div :class="clsSubmit">
      <th-button :type="'primary'" v-on:click="onQuery">
        <th-icon :class="clsSubmitIcon">
          <Search></Search>
        </th-icon>
        查询
      </th-button>
      <th-button :type="'warning'" v-on:click="resetForm">
        <th-icon :class="clsSubmitIcon">
          <Refresh></Refresh>
        </th-icon>
        重置
      </th-button>
      <th-button :type="'success'" v-on:click="showMore">
        <th-icon :class="clsSubmitIcon">
          <Search></Search>
        </th-icon>
        更多
      </th-button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineOptions, computed, watch, ref, onMounted, nextTick } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'
import { useName } from "../hook/useName"
import { QueryColumnsProps } from './query';
import * as _ from 'lodash';
import { FormInstance } from 'element-plus';

import { ThRef } from '../common';
defineOptions({
  name: 'ThQuery'
})
interface IQuery{
  labelWidth?:number,
  inline?:boolean,
  showCount?:number,
  columns?:Array<QueryColumnsProps>,
  modelValue?:any,
  rules?:any
}
const props = withDefaults(defineProps<IQuery>(), {
  labelWidth: 80,
  inline: false,
  showCount:3,
  columns:()=>[],
  modelValue:{},
  rules:{}
})

//样式处理
const ns = useName('query')
const cls = computed(() => [
  ns.base(),
  ns.m(props.inline ? 'line' : ''),
])

const isExpandHeight = computed(() => {
  if (isExpand.value) {
    return Math.ceil(props.columns!.length / props.showCount) * 50
  } else {
    return 50
  }
})

const clsFormItem = computed(() => [
  ns.is(props.inline ? `flex-${Math.floor(24 / props.showCount)}` : ''),
])
const clsSubmit = computed(() => [
  ns.m('sure'),
])
const clsSubmitIcon = computed(() => [
  ns.m('icon'),
])
//事件处理
const emits = defineEmits<{
  (e:'onQuery',val:any):void
  (e:'update:modelValue',val:any):void
}>()

//变量声明
const columns = ref<Array<QueryColumnsProps>>([]);
const isExpand = ref<boolean>(false)
const ruleFormModel = ref<any>({})
const ruleFormRef = ref<ThRef<FormInstance>>()

onMounted(() => {
  nextTick(() => {
    init()
  })
})

const showMore = () => {
  isExpand.value = !isExpand.value
}

// 初始化数据
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

// 监听变化
watch(() => props.columns, () => {
  init()
}, { deep: true });

watch(() => ruleFormModel.value, (newVal) => {
  emits("update:modelValue", newVal)
}, { deep: true })

const resetForm = () => {
  console.log(ruleFormRef.value)
  if (!ruleFormRef.value) return
  ruleFormRef.value.getRef().resetFields()
  onQuery()
}

const onQuery=()=>{
  ruleFormRef.value!.getRef().validate((valid) => {
    if (valid) {
      emits("onQuery", ruleFormModel)
    }
  })
}

defineExpose({resetForm })
</script>


<style lang='scss' scoped></style>
