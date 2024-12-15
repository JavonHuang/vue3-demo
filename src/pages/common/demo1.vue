<template>
  <th-page-layout>
    <th-query :columns="columns" :inline="true">
      <template #num2="{data,formData}">
        <th-input v-model="formData[data.prop]"></th-input>
      </template>
    </th-query>
    <th-query-table :border="true" :selectable="true" :api="API.table" :columns="tableColumns">
      <template #name="scope">我的名字：{{ scope.row.name }}</template>
      <template #age="scope">我的年龄：{{ scope.row.age }}</template>
    </th-query-table>
  </th-page-layout>
</template>

<script setup lang='ts'>
import { QueryColumnsProps } from 'th-ui-plus/src/query/query';
import { ref } from 'vue';
import API from "@/api/commonApi"
import { IQueryColumn } from 'th-ui-plus/src/queryTable/queryTable';

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

const columns=ref<Array<QueryColumnsProps>>([
  {
    type:'ThInput',
    label:"数量",
    prop:'num',
    value:'2021-10-29',
    props:{
    }
  },
  {
    type:'ThInput',
    label:"插槽",
    prop:'num2',
    slot:true,
    value:'676776',
    props:{
    }
  },
  {
    type:'ThSelect',
    label:"数量",
    prop:'num3',
    value:'676776',
    props:{
      options:[{
        value:"676776",
        label:"那么"
      }]
    }
  },
  {
    type:'ThDatePicker',
    label:"出生日期",
    prop:'age',
    value:null,
    props:{
    value:'2021-10-29',
    placeholder:"Pick a day",
    format:"YYYY/MM/DD",
    valueFormat:"YYYY-MM-DD",
    }
  },
  {
    type:'ThDatePicker',
    label:"毕业时间",
    prop:'age1',
    value:null,
    props:{
    value:'2021-10-29',
    placeholder:"Pick a day",
    format:"YYYY/MM/DD",
    valueFormat:"YYYY-MM-DD",
    }
  },
  {
    type:'ThDatePicker',
    label:"工作时间",
    prop:'age2',
    value:null,
    props:{
    value:'2021-10-29',
    placeholder:"Pick a day",
    format:"YYYY/MM/DD",
    valueFormat:"YYYY-MM-DD",
    }
  }
])
const onclas=()=>{
  columns.value=[
    {
      type:'ThInput',
      label:"数量",
      prop:'num',
      value:null,
      props:{
        value:'2021-10-29'
      }
    },
    {
    type:'ThSelect',
    label:"数量",
    prop:'num',
    value:null,
    props:{
      options:[{
        value:"676776",
        label:"那么"
      },
      {
        value:"676776323",
        label:"那么2"
      }]
    }
  },
  ]
}

const onEditProp=()=>{
  columns.value[0].label="测试变更"
}
</script>

<style lang='scss' scoped>

</style>