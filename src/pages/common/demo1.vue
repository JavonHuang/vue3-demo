<template>
  <th-page-layout>
    <th-query v-model="queryModel" :columns="columns" :inline="true" :rules="rules" v-on:onQuery="onQuery">
      <template #num2="{data,formData}">
        <th-input v-model="formData[data.prop]"></th-input>
      </template>
    </th-query>
    <th-query-table ref="queryTableRef" :selectable="true" :api="API.table" :columns="tableColumns">
      <template #name="scope">我的名字：{{ scope.row.name }}</template>
      <template #age="scope">我的年龄：{{ scope.row.age }}</template>
    </th-query-table>
  </th-page-layout>
  <th-button v-on:click="test"></th-button>
</template>

<script setup lang='ts'>
import { QueryColumnsProps } from 'th-ui-plus';
import { ref,reactive } from 'vue';
import API from "@/api/commonApi"
import { IQueryColumn, QueryTableInstance } from 'th-ui-plus';

const tableColumns=ref<Array<IQueryColumn>>([
  {
    columnType:'text',
    prop:'name',
    label:'文本',
    width:180,
    isSlot:true,
  },
  {
    columnType:'year',
    prop:'year',
    label:'年',
  },
  {
    columnType:'month',
    prop:'month',
    label:'月',
  },
  {
    columnType:'date',
    prop:'date',
    label:'日',
  },
  {
    columnType:'dateTime',
    prop:'dateTime',
    label:'时间',
  },
  {
    columnType:'time',
    prop:'time',
    label:'时分秒',
  },
  {
    columnType:'number',
    prop:'number',
    label:'数量',
    width:80,
  },
  {
    columnType:'thousands',
    prop:'thousands',
    label:'千分位',
  },
  {
    columnType:'text',
    prop:'age',
    label:'年龄',
    isSlot:true,
    fixed:"right"
  },
])
const queryModel=reactive({
  num:'2021-10-29',
  num2:12,
  num3:'21',
  age:new Date().getTime(),
  age1:'2021-10-29',
  age2:'2021-10-29',
})
const columns=ref<Array<QueryColumnsProps>>([
  {
    component:'ThInput',
    label:"数量",
    prop:'num',
  },
  {
    component:'ThInput',
    label:"插槽",
    prop:'num2',
    slot:true,
  },
  {
    component:'ThSelect',
    label:"数量",
    prop:'num3',
    props:{
      options:[{
        value:"676776",
        label:"那么"
      }]
    }
  },
  {
    component:'ThDatePicker',
    label:"出生日期",
    prop:'age',
  },
  {
    component:'ThDatePicker',
    label:"毕业时间",
    prop:'age1',
    props:{
      value:'2021-10-29',
    }
  },
  {
    component:'ThDatePicker',
    label:"工作时间",
    prop:'age2',
    props:{
      placeholder:"请选择工作时间",
    }
  }
])

const queryTableRef=ref<QueryTableInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}


const rules=reactive({
  num: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { required: true, min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  num2: [{ validator: checkAge, trigger: 'blur' }],
})



const onQuery=(e:any)=>{
  queryTableRef.value?.reflesh()
}

const test=()=>{
  queryModel.num3='67677632323'
  columns.value![2]!.props!.options=[
    {
       value:"676776",
        label:"那么"
    },
     {
      value:"67677632323",
        label:"那么3"
     }
  ]
}
</script>

<style lang='scss' scoped>

</style>