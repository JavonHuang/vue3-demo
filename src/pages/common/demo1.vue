<template>
  <th-card>
    <th-query :columns="columns" :inline="true">
      <template #num2="{data,formData}">
        <th-input v-model="formData[data.prop]"></th-input>
      </template>
    </th-query>
  </th-card>
  <th-card>
    <th-query-table :border="true" :api="API.table" :columns="tableColumns">
      <template #name="scope">{{ scope.row.age }}</template>
      <template #age="scope">{{ scope.row.name }}/{{ scope.row.age }}</template>
    </th-query-table>
    {{te}} {{te1}}  {{te2}}
  </th-card>
</template>

<script setup lang='ts'>
import { QueryColumnsProps } from 'th-ui-plus/src/query/query';
import { ref } from 'vue';
import API from "@/api/commonApi"
import { IQueryColumn } from 'th-ui-plus/src/queryTable/queryTable';
import moment from 'moment';

const te=moment().format('x')
const te1=moment('2024-12-10 00:00:00').format('x')
const te2=moment().endOf('day').valueOf()
const tableColumns=ref<Array<IQueryColumn>>([
  {
    columnType:'date',
    prop:'name',
    label:'名字',
    width:80,
    isSlot:true,
  },
  {
    columnType:'date',
    prop:'age',
    label:'年龄',
    isSlot:true,
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