<template>
  <th-page-layout>
    <th-query v-model="queryModel" :columns="columns" :inline="true" :rules="rules" v-on:onQuery="onQuery">
      <template #num2="{data,formData}">
        <th-input v-model="formData[data.prop]"></th-input>
      </template>
    </th-query>
    <th-query-table ref="queryTableRef" :border="true" :selectable="true" :api="API.table" :columns="tableColumns">
      <template #name="scope">我的名字：{{ scope.row.name }}</template>
      <template #age="scope">我的年龄：{{ scope.row.age }}</template>
    </th-query-table>
  </th-page-layout>
</template>

<script setup lang='ts'>
import { QueryColumnsProps } from 'th-ui-plus';
import { ref,reactive } from 'vue';
import API from "@/api/commonApi"
import { IQueryTableColumn, QueryTableInstance } from 'th-ui-plus';

const tableColumns=ref<Array<IQueryTableColumn>>([
  {
    // columnType:'link',
    prop:'name',
    label:'超链接',
    // width:180,
    children:[
      {
        columnType:'link',
        prop:'name',
        label:'超链接2',
        width:180,
        children:[
          {
            columnType:'link',
            prop:'name',
            label:'超链超链接23223323接2',
            width:180,
          },
          {
            columnType:'link',
            prop:'name',
            label:'超链接23223323',
            width:180,
          },
        ]
      },
      {
        // columnType:'link',
        prop:'name',
        label:'超链接23',
        width:180,
      },
      {
        // columnType:'link',
        prop:'name',
        label:'超链接23',
        width:180,
      }
    ]
  },
  {
    columnType:'text',
    prop:'name',
    label:'文本父级',
    // width:180,
    // isSlot:true,
    children:[
      {
        columnType:'text',
        prop:'name',
        label:'文本1',
        // width:180,
        isSlot:true,
      },
      {
        columnType:'text',
        prop:'name',
        label:'文本2',
        // width:180,
        isSlot:true,
      }
    ]
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
    fixed:'right'
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
  num:'2021',
  num2:20,
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
    if (value < 18) {
      callback(new Error('Age must be greater than 18'))
    } else {
      callback()
    }
  }, 100)
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