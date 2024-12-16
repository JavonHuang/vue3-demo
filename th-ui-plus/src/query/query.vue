<template>
  <div :class="cls">
    <th-form ref="ruleFormRef" :style="{height:isExpandHeight+'px'}" :model="ruleForm" :label-width="props.labelWidth" :inline="props.inline">
      <th-form-item v-for="item in columns" :class="clsFormItem" :inline="props.inline" :key="item.prop" :label="item.label"
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
import { defineOptions, computed, watch, ref, reactive, onMounted,nextTick } from 'vue'
import { Search, Refresh } from '@element-plus/icons-vue'
import { useName } from "../hook/useName"
import { QueryColumnsProps } from './query';
import * as _ from 'lodash';
import { FormInstance } from 'element-plus';
import { ThRef } from '../global';
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

//样式处理
const ns = useName('query')
const cls = computed(() => [
  ns.base(),
  ns.m(props.inline ? 'line' : ''),
])

const isExpandHeight = computed(() => {
  if (isExpand.value) {
    return Math.ceil(props.columns!.length/props.showCount)*50
  }else{
    return 50
  }
}
)

const clsFormItem = computed(() => [
  ns.is(props.inline ?`flex-${Math.floor(24/props.showCount)}`:''),
])
const clsSubmit = computed(() => [
  ns.m('sure'),
])
const clsSubmitIcon = computed(() => [
  ns.m('icon'),
])
console.log('clsSubmit', clsSubmit)
//事件处理
const emits = defineEmits(["update:modelValue"])

//变量声明
const columns = ref<Array<QueryColumnsProps>>([]);
const isExpand = ref<boolean>(false)
const ruleForm = reactive<any>({})
const ruleFormRef = ref<ThRef<FormInstance>>()

onMounted(() => {
  nextTick(()=>{
    init()
  })
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

const resetForm = () => {
  console.log(ruleFormRef.value)
  if (!ruleFormRef.value) return
  ruleFormRef.value.getRef().resetFields()
}

const showMore=()=>{
  isExpand.value=!isExpand.value
}

// 初始化数据
const init = () => {
  columns.value = _.cloneDeep(props.columns ?? [])
  _.map(columns.value, (e) => {
    ruleForm[e.prop] = e.value
  });
}

// 监听变化
watch(() => props.columns, (newVal, oldVal) => {
  if (!_.isEqual(newVal, oldVal)) {
    init()
  }
});

watch(() => columns.value, (newVal) => {
  // const formValue: any = {}
  // _.map(newVal, (e) => {
  //   formValue[e.prop] = e.value
  // });
  // emits("update:modelValue", formValue)
}, { deep: true })

defineExpose({ submitForm, resetForm })
</script>


<style lang='scss' scoped></style>
