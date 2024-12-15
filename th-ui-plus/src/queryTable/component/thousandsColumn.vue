<template>
  <div :class="cls">
    {{numberFormatter()}}
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue';
import { useName } from '../../hook/useName';

defineOptions({
  name: 'ThQueryThousandsColumn'
})
//样式处理
const ns = useName('query-table-thousands-column')
const cls = computed(() => [
  ns.base(),
])

const props = withDefaults(defineProps<{row: any, column: any, cellValue: any, index: number}>(), {

})

const numberFormatter=()=>{
  if(!isNaN(Number(props.cellValue)) && !isNaN(parseFloat(props.cellValue))){
    return props.cellValue.toLocaleString()
  }else{
    return '-'
  }
}
</script>

<style lang='scss' scoped>

</style>