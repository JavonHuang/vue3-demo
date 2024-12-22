<template>
  <div :class="cls">
    <div :class="clsheader">
      <div>
        <th-button :type="'primary'">新增<th-icon><DocumentAdd/></th-icon></th-button>
        <th-button>导出</th-button>
      </div>
      <th-popover trigger="hover">
        <template #reference>
          <th-icon :size="18"><Grid/></th-icon>
        </template>
        <div class="el-dropdown-link" v-for="item in props.columns">
          <th-checkbox :label="item.label" v-model="columnMaps[item.prop??'']" :value="item.prop" v-on:change="(e)=>change(e,item)"></th-checkbox>
        </div>
      </th-popover>
    </div>
    <th-table height="100%" :data="tableData" :border="props.border" ref="tableRef"
      @selection-change="handleSelectionChange">
      <th-table-column v-if="props.selectable" type="selection" :selectable="selectable" width="55"></th-table-column>
      <tree-column :children="item.children" v-bind="item" v-for="item in props.columns">
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name v-bind="slotData || {}"></slot>
        </template>
      </tree-column>
    </th-table> 
    <div :class="clsPagination">
      <th-pagination size="small" v-model:current-page="currentPage" v-model:page-size="pageSize"
        :page-sizes="[100, 200, 300, 400]" layout="total, sizes, prev, pager, next, jumper" :total="total"
        @size-change="handleSizeChange" @current-change="handleCurrentChange">
      </th-pagination>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, computed, onMounted, nextTick,h, watch } from 'vue'
import {Grid,DocumentAdd} from '@element-plus/icons-vue'
import { useName } from "../hook/useName"
import { IQueryTableColumn, IQueryTable, QueryTableInstance } from './queryTable'
import { TableInstance } from 'element-plus'
import TreeColumn from './component/treeColumn.vue'

import { ThRef } from '../common'

defineOptions({
  name: 'ThQueryTable'
})

const props = withDefaults(defineProps<IQueryTable>(), {
  selectable: false,
  border: false,
})

//样式处理
const ns = useName('query-table')
const cls = computed(() => [
  ns.base(),
])
const clsheader = computed(() => [
  ns.m('header'),
])
const clsPagination = computed(() => [
  ns.m('pagination'),
])
const tableRef=ref<ThRef<TableInstance>>()
const tableData = ref([])
const columnMaps = ref<any>({})
const currentPage = ref(1)
const pageSize = ref(100)
const total = ref(0)

watch(() => props.columns, () => {
  initColumnMaps()
}, { deep: true })

onMounted(() => {
  initColumnMaps()
  nextTick(() => {
    getDataSource()
  })
})

const initColumnMaps=()=>{
  props.columns.forEach((e:IQueryTableColumn)=>{
    columnMaps.value[e.prop??'']=true
  })
}
initColumnMaps()

const change=(e:boolean|any,i:IQueryTableColumn)=>{
  columnMaps.value[i.prop??'']=e
  nextTick(()=>{
    tableRef.value?.getRef().doLayout()
  })
}

const showColumn=(i:IQueryTableColumn)=>{
  if(!i)return true
  return columnMaps.value[i.prop??'']??true
}

const getDataSource = () => {
  const obj = getParams()
  props.api(obj).then((e) => {
    tableData.value = e.data;
    total.value = e.total;
  })
}

const getParams = (): any => {
  return {
    pageSize: pageSize.value,
    currentPage: currentPage.value,
  }
}

const handleSizeChange = () => {
  getDataSource()
}

const handleCurrentChange = () => {
  getDataSource()
}

const selectable = (row: any) => true



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

const reflesh=()=>{
  currentPage.value=1
  getDataSource()
}

const getTableData =()=>tableData.value

defineExpose<QueryTableInstance>({reflesh,getTableData })
</script>

<style lang='scss' scoped></style>