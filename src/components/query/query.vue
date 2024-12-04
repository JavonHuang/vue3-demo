<template>
  <div :class="cls">
    <th-form 
    ref="ruleFormRef"
    :model="ruleForm"
    :label-width="props.labelWidth"
    :label-suffix="':'"
    :inline="props.inline"
    >
      <th-form-item :inline="props.inline" v-for="item in columns" :key="item.prop" :label="item.label" :prop="item.prop">
        <component :is="item.type" v-bind="item.props" v-model="ruleForm[item.prop]"></component>
      </th-form-item>
      <dev :class="clsSubmit">
        <th-button>重置</th-button>
        <th-button :type="'primary'">确定</th-button>
      </dev>
    </th-form>
  </div>
</template>

<script setup lang='ts'>
import { defineOptions, computed, watch, ref, reactive, onMounted } from 'vue'
import { useName } from "../hook/useName"
import { QueryColumnsProps } from './query';
import * as _ from 'lodash';
import { FormInstance } from 'element-plus';
defineOptions({
  name: 'ThQuery'
})
const ns = useName('query')
const cls = computed(() => [
  ns.base(),
])

const clsSubmit = computed(() => [
  ns.m('sure'),
])

const props = defineProps({
  labelWidth: {
    type: Number,
    default:80
  },
  inline: {
    type: Boolean,
    default:true
  },
  columns: Array<QueryColumnsProps>
})
const emits = defineEmits(["update:modelValue"])

const columns = ref<Array<QueryColumnsProps>>(_.cloneDeep(props.columns??[]));

const ruleForm = reactive<any>({})
const ruleFormRef = ref<FormInstance>()

onMounted(()=>{
  _.map(columns.value, (e)=>{
    ruleForm[e.prop]=e.value
  });
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}



// 监听变化
watch(() => props.columns, (newVal, oldVal) => {
  if(!_.isEqual(newVal,oldVal)){
    columns.value = _.cloneDeep(newVal??[])
  }
});

watch(() => columns.value, (newVal) => {
  const formValue:any={}
  _.map(newVal, (e)=>{
    formValue[e.prop]=e.props.value
  });
  emits("update:modelValue",formValue)
}, { deep: true })

defineExpose({submitForm,resetForm})
</script>


<style lang='scss' scoped></style>
