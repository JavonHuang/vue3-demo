<template>
  <div>
    <div class="demo1">demo1</div>
    <sky-button size="small" type="success" v-on:click="onclas">45678黄9</sky-button>
    <sky-query :columns="columns"></sky-query>
    <my-button :type="'secondary'"></my-button>
  </div>
</template>

<script setup lang='ts'>
import { QueryColumnsProps } from '@/components';
import MyButton from './test.vue'
import { ref } from 'vue';

const columns=ref<Array<QueryColumnsProps>>([
  {
    type:'SkyInput',
    props:{
      value:'2021-10-29'
    }
  },
  {
    type:'SkyDatePicker',
    props:{
    value:'2021-10-29',
    placeholder:"Pick a day",
    format:"YYYY/MM/DD",
    valueFormat:"YYYY-MM-DD",
    }
  },
  {
    type:'SkyDatePicker',
    props:{
    value:'2021-10-29',
    placeholder:"Pick a day",
    format:"YYYY/MM/DD",
    valueFormat:"YYYY-MM-DD",
    }
  },
  {
    type:'SkyDatePicker',
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