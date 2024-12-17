<template>
  <th-page-layout>
    <th-form-auto v-model="queryModel" :columns="columns" :rules="rules">
    </th-form-auto>
  </th-page-layout>
</template>

<script setup lang='ts'>
import { FormAutoColumnsProps } from 'th-ui-plus';
import { ref,reactive } from 'vue';

const queryModel=reactive({
  num:'2021-10-29',
  num2:12,
  num3:null,
  age:new Date().getTime(),
  age1:'2021-10-29',
  age2:'2021-10-29',
})

const columns=ref<Array<FormAutoColumnsProps>>([
  {
    component:'ThInput',
    label:"数量",
    prop:'num',
    span:12,
    props:{
      change:(e:any)=>{
        console.log('ThInput',e)
      },
    }
  },
  {
    component:'ThInput',
    label:"插槽",
    prop:'num2',
    span:12,
  },
  {
    component:'ThSelect',
    label:"数量",
    prop:'num3',
    span:4,
    props:{
      change:(e:any)=>{
        console.log('ThSelect',e)
      },
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
    span:4,
    event:{
      change:(e:any)=>{
        console.log('ThDatePicker',e)
      },
    }
  },
  {
    component:'ThDatePicker',
    label:"毕业时间",
    prop:'age1',
    span:10,
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
const rules=reactive({
  num: [
    // { required: true, message: 'Please input Activity name', trigger: 'blur' },
    // { required: true, min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
})

</script>

<style lang='scss' scoped>

</style>