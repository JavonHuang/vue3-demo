<template>
  <th-table height="100%"  :class="cls" :data="tableData" :border="props.border" @selection-change="handleSelectionChange">
    <th-table-column v-if="props.selectable" type="selection" :selectable="selectable"  width="55" />
    <th-table-column v-bind="item" v-for="item in props.columns">
      <template #default="scope" v-if="item.isSlot">
        <slot :name="item.prop" v-bind="scope || {}"></slot>
      </template>
    </th-table-column>
  </th-table>
  <div>
  <th-pagination
    v-model:current-page="currentPage4"
    v-model:page-size="pageSize4"
    :page-sizes="[100, 200, 300, 400]"
    :size="size"
    :disabled="disabled"
    :background="background"
    layout="total, sizes, prev, pager, next, jumper"
    :total="400"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
  </th-pagination>
</div>
</template>

<script setup lang='ts'>
import { ref,computed, onMounted, nextTick,useSlots } from 'vue'
import { useName } from "../hook/useName"
import { IQueryColumn } from './queryTable';
import { ComponentSize, TableInstance } from 'element-plus';
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
  selectable:{
    type:Boolean,
    default:true,
  },
  border:{
    type:Boolean,
    default:false,
  }
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
const selectable = (row:any) => true

const multipleTableRef = ref<TableInstance>()
const multipleSelection = ref<[]>([])

const toggleSelection = (rows?: [], ignoreSelectable?: boolean) => {
  if (rows) {
    rows.forEach((row) => {
      multipleTableRef.value!.toggleRowSelection(
        row,
        undefined,
        ignoreSelectable
      )
    })
  } else {
    multipleTableRef.value!.clearSelection()
  }
}
const handleSelectionChange = (val: []) => {
  multipleSelection.value = val
}

const currentPage4 = ref(4)
const pageSize4 = ref(100)
const size = ref<ComponentSize>('default')
const background = ref(false)
const disabled = ref(false)

const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
</script>

<style lang='scss' scoped></style>