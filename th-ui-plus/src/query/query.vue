<template>
  <div :class="cls">
    <th-form ref="ruleFormRef" :model="ruleForm" :label-width="props.labelWidth" :inline="props.inline">
      <th-form-item v-for="item in columnsShow" :inline="props.inline" :key="item.prop" :label="item.label"
        :prop="item.prop">
        <slot :name="item.prop" :data="item" :formData="ruleForm" v-if="item.slot"></slot>
        <component :is="item.type" v-bind="item.props" v-model="ruleForm[item.prop]" v-else></component>
      </th-form-item>
    </th-form>
    <div :class="clsSubmit">
      <th-button :type="'primary'">
        <th-icon :class="clsSubmitIcon">
          <Search></Search>
        </th-icon>
        查询
      </th-button>
      <th-button>
        <th-icon :class="clsSubmitIcon">
          <Refresh></Refresh>
        </th-icon>
        重置
      </th-button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { defineOptions, computed, watch, ref, reactive, onMounted } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'

import { useName } from "../hook/useName"
import { QueryColumnsProps } from './query';
import * as _ from 'lodash';
import { FormInstance } from 'element-plus';
defineOptions({
  name: 'ThQuery'
})
const props = defineProps({
  labelWidth: {
    type: Number,
    default: 80
  },
  inline: {
    type: Boolean,
    default: true
  },
  showCount: {
    type: Number,
    default: 3
  },
  columns: Array<QueryColumnsProps>
})

const ns = useName('query')
const cls = computed(() => [
  ns.base(),
  ns.m(props.inline ? 'line' : ''),
])

const clsSubmit = computed(() => [
  ns.m('sure'),
])

const clsSubmitIcon = computed(() => [
  ns.m('icon'),
])
console.log('clsSubmit', clsSubmit)

const emits = defineEmits(["update:modelValue"])

const columns = ref<Array<QueryColumnsProps>>(_.cloneDeep(props.columns ?? []));
const columnsShow = computed(() => {
  return columns.value.splice(0, props.showCount)
})
const ruleForm = reactive<any>({})
const ruleFormRef = ref<FormInstance>()

onMounted(() => {
  _.map(columnsShow.value, (e) => {
    ruleForm[e.prop] = e.value
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
  if (!_.isEqual(newVal, oldVal)) {
    columns.value = _.cloneDeep(newVal ?? [])
  }
});

watch(() => columns.value, (newVal) => {
  const formValue: any = {}
  _.map(newVal, (e) => {
    formValue[e.prop] = e.value
  });
  emits("update:modelValue", formValue)
}, { deep: true })

defineExpose({ submitForm, resetForm })
</script>


<style lang='scss' scoped></style>
