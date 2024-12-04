<template>
  <th-card>
    <th-query :columns="columns" :inline="true"></th-query>
    <!-- <th-button v-on:click="onclas">整个重新赋值</th-button>
    <th-button v-on:click="onEditProp">单个属性修改</th-button> -->
  </th-card>
</template>

<script setup lang='ts'>
import { QueryColumnsProps } from '@/components';
import { ref } from 'vue';

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
    type:'ThSelect',
    label:"数量",
    prop:'num2',
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
  columns.value[1].props.options=[{
        value:"676776",
        label:"那么"
      },
      {
        value:"676776323",
        label:"那么2"
      },{
        value:"67677632223",
        label:"那么3"
      }]

}
</script>

<style lang='scss' scoped>

</style>