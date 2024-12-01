<template>
  <div>
    <div class="demo1">demo1</div>
    <sky-button v-on:click="onclas">45678黄9</sky-button>
    <sky-query :columns="columns"></sky-query>
  </div>
</template>

<script setup lang='ts'>
import { QueryColumnsProps } from '@/components';
import { ref } from 'vue';

const columns=ref<Array<QueryColumnsProps>>([
  {
    type:'SkyInput',
    label:"数量",
    prop:'num',
    props:{
      value:'2021-10-29'
    }
  },
  {
    type:'SkyDatePicker',
    label:"出生日期",
    prop:'age',
    props:{
    value:'2021-10-29',
    placeholder:"Pick a day",
    format:"YYYY/MM/DD",
    valueFormat:"YYYY-MM-DD",
    }
  },
  {
    type:'SkyDatePicker',
    label:"毕业时间",
    prop:'age1',
    props:{
    value:'2021-10-29',
    placeholder:"Pick a day",
    format:"YYYY/MM/DD",
    valueFormat:"YYYY-MM-DD",
    }
  },
  {
    type:'SkyDatePicker',
    label:"工作时间",
    prop:'age2',
    props:{
    value:'2021-10-29',
    placeholder:"Pick a day",
    format:"YYYY/MM/DD",
    valueFormat:"YYYY-MM-DD",
    }
  }
])
const onclas=()=>{
  alert('54678')
}
const value = ref('2021-10-29')

</script>

<style lang='scss' scoped>
.demo1{
  background: white;
}
</style>