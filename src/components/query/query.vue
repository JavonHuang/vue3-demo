<template>
  <div 
  :class="cls">
  <sky-form>
    <sky-form-item v-for="item in props.columns">
      <component :is="item.type" v-bind="item.props" v-model="item.props.value"></component>
    </sky-form-item>
  </sky-form>
  </div>
</template>

<script setup lang='ts'>
import {defineOptions,computed,watch } from 'vue'
import {useName} from "../hook/useName"
import { QueryProps } from './query';

defineOptions({
  name:'SkyQuery'
})
const props= defineProps<QueryProps>()
 
const ns = useName('query')
const cls = computed(() => [
  ns.base(),
])
// 监听 count 的变化
watch(()=>props.columns, (newVal, oldVal) => {
      console.log(`count changed from ${JSON.stringify(oldVal)} to ${JSON.stringify(newVal)}`);
},{ deep: true });
 
</script>


<style lang='scss' scoped>

</style> 

