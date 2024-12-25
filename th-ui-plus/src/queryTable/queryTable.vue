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
        <th-tree v-on:check-change="checkChange" ref="treeRef" :data="columns" :props="defaultProps" node-key="id" show-checkbox :default-checked-keys="defaultColumnsShowList"></th-tree>
      </th-popover>
    </div>
    <th-table height="100%" :data="tableData" :border="props.border" ref="tableRef"
      @selection-change="handleSelectionChange">
      <th-table-column v-if="props.selectable" type="selection" :selectable="selectable" width="55"></th-table-column>
      <tree-column :column-show="columnsShowList" :children="item.children" v-bind="item" v-for="item in columns">
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
import { cloneTree, generateID } from '../tool'
import ThTree, { TreeInstance } from '../tree/tree'
const defaultProps = {
  children: 'children',
  label: 'label',
}
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
const currentPage = ref(1)
const pageSize = ref(100)
const total = ref(0)
const columns = ref<Array<IQueryTableColumn>>([])
const defaultColumnsShowList = ref<Array<any>>([])
const columnsShowList = ref<Array<any>>([])
const treeRef = ref<ThRef<TreeInstance>>()


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
  defaultColumnsShowList.value=[]
  columnsShowList.value=[]
  columns.value = cloneTree(props.columns,(e:any)=>{
    if(typeof e.show ==='undefined' || e.show){
      e.show=true
      e['id']=generateID()
      defaultColumnsShowList.value.push(e['id'])
      columnsShowList.value.push(e['id'])
    }else{
      e.show=false
    }
  })
}
initColumnMaps()

const change=(e:boolean|any,i:IQueryTableColumn)=>{
  nextTick(()=>{
    tableRef.value?.getRef().doLayout()
  })
}

const checkChange=()=>{
  const nodes= treeRef.value?.getRef().getCheckedKeys()
  const nodesHalf= treeRef.value?.getRef().getHalfCheckedKeys()
  columnsShowList.value = [...nodes as Array<string>,...nodesHalf as Array<string>]
  nextTick(()=>{
    tableRef.value?.getRef().doLayout()
  })
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