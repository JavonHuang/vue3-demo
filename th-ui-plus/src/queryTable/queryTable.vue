<template>
  <div :class="cls">
    <th-table :data="tableData">
      <th-table-column v-bind="item" v-for="item in props.columns">
        <template #default="scope" v-if="item.isSlot">
          <slot :name="item.prop" v-bind="scope || {}"></slot>
        </template>
      </th-table-column>
    </th-table>
  </div>
</template>

<script setup lang='ts'>
import { ref,computed, onMounted, nextTick,useSlots } from 'vue'
import { useName } from "../hook/useName"
import { IQueryColumn } from './queryTable';
defineOptions({
  name: 'ThQueryTable'
})
type ApiFunctionType = (_data:any) => Promise<any>;
const props = defineProps({
  api: {
    type: Function as unknown as () => ApiFunctionType, // 使用类型断言来指定函数的类型
    default: () => Promise.resolve(), // 提供一个默认的实现，它返回一个已解决的 Promise
  },
  columns: Array<IQueryColumn>,
})
//样式处理
const ns = useName('query-table')
const cls = computed(() => [
  ns.base(),
])

const tableData=ref([])

onMounted(() => {
  nextTick(()=>{
    init()
  })
  console.log(useSlots())
})

const init=()=>{
  props.api({}).then((e)=>{
    tableData.value=e.data
  })
}

</script>

<style lang='scss' scoped></style>