<template>
  <el-table-column :class="cls" v-bind="$attrs" :formatter="getColumnFormatter($attrs as IQueryTableColumn)">
    <template #default="scope" v-if="$attrs.isSlot">
      <slot :name="$attrs.prop" v-bind="scope || {}"></slot>
    </template>
    <template v-for="item in props.children" v-if="props.children.length!=0">
      <tree-column v-bind="item">
        <template v-for="(_, name) in $slots" #[name]="slotData">
          <slot :name v-bind="slotData || {}"></slot>
        </template>
      </tree-column>
    </template>
  </el-table-column>
</template>

<script setup lang='ts'>
import moment from 'moment'
import { IQueryTableColumn } from '../queryTable';
import NumberColumn from './../component/numberColumn.vue'
import ThousandsColumn from './../component/thousandsColumn.vue'
import TinkColumn from './../component/linkColumn.vue'
import { ElTableColumn } from 'element-plus'
import { computed, h } from 'vue';
import { useName } from '../../hook/useName';

defineOptions({
  name: 'tree-column'
})

const ns = useName('table-column')
const cls = computed(() => [
  ns.base(),
])

const props = withDefaults(
  defineProps<{
    children?: Array<IQueryTableColumn>
  }>(),
  {
    children: ()=>[] as Array<IQueryTableColumn>,
  }
);


const getColumnFormatter = (queryColumn: IQueryTableColumn) => {
  return (row: any, column: any, cellValue: any, index: number) => {
    console.log(queryColumn)
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
      case 'link':
        return h(TinkColumn,{row,column,cellValue,index})
      default:
        return cellValue
    }
  }
}


const getColumnWidth = (queryColumn: IQueryTableColumn) => {
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
</script>

<style lang='scss' scoped>

</style>