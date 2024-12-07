import { withInstall } from "../withInstall"
import TableColumn from "./tableColumn.vue"
import { ElTableColumn } from 'element-plus'
export const ThTableColumn = withInstall(TableColumn)
export type ThTableColumnProps = typeof ElTableColumn & typeof ThTableColumn
export default ThTableColumn   
