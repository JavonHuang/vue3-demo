<template>
  <th-table height="100%" :class="cls" :data="tableData" :border="props.border" ref="tableRef"
    @selection-change="handleSelectionChange">
    <th-table-column v-if="props.selectable" type="selection" :selectable="selectable" width="55"></th-table-column>
    <th-table-column :formatter="getColumnFormatter(item)" v-bind="item" :min-width="item.minWidth??80" :width="getColumnWidth(item)"
      v-for="item in props.columns">
      <template #default="scope" v-if="item.isSlot">
        <slot :name="item.prop" v-bind="scope || {}"></slot>
      </template>
    </th-table-column>
  </th-table>
  <div :class="clsPagination">
    <th-pagination size="small" v-model:current-page="currentPage" v-model:page-size="pageSize"
      :page-sizes="[100, 200, 300, 400]" layout="total, sizes, prev, pager, next, jumper" :total="total"
      @size-change="handleSizeChange" @current-change="handleCurrentChange">
    </th-pagination>
  </div>
</template>

<script setup lang='ts'>
import { ref, computed, onMounted, nextTick,h } from 'vue'
import { useName } from "../hook/useName"
import { IQueryColumn, IQueryTable } from './queryTable'
import { TableInstance } from 'element-plus'
import NumberColumn from './component/numberColumn.vue'
import ThousandsColumn from './component/thousandsColumn.vue'
import moment from 'moment';
import { ThRef } from '../global'

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

const clsPagination = computed(() => [
  ns.m('pagination'),
])
const tableRef=ref<ThRef<TableInstance>>()
const tableData = ref([])
const currentPage = ref(1)
const pageSize = ref(100)
const total = ref(0)

onMounted(() => {
  nextTick(() => {
    getDataSource()
  })
})

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

const getColumnFormatter = (queryColumn: IQueryColumn) => {
  return (row: any, column: any, cellValue: any, index: number) => {
    switch (queryColumn.columnType) {
      case 'year':
        return moment(cellValue).format('yyyy')
      case 'month':
        return moment(cellValue).format('MM').replace('0',(match, index, _string)=>{
          return index === 0 ? '' : match; 
        })
      case 'date':
        return moment(cellValue).format('yyyy-MM-DD')
      case 'dateTime':
        return moment(cellValue).format('yyyy-MM-DD HH:mm:ss')
      case 'time':
        return moment(cellValue).format('HH:mm:ss')
      case 'number':
        return h(NumberColumn,{row,column,cellValue,index})
      case 'thousands':
        return h(ThousandsColumn,{row,column,cellValue,index})
      default:
        return cellValue
    }
  }
}

const getColumnWidth = (queryColumn: IQueryColumn) => {
  switch (queryColumn.columnType) {
    case 'year':
      return 60
    case 'month':
      return 50
    case 'date':
      return 110
    case 'dateTime':
      return 170
    case 'time':
      return 90
    default:
      return queryColumn.width
  }
}
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
  console.log(tableRef.value?.getRef())
}
</script>

<style lang='scss' scoped></style>