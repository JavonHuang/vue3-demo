import { withInstall } from "../withInstall"
import Table from "./table.vue"
import { ElTable } from 'element-plus'
export const ThTable = withInstall(Table)
export type ThTableProps = typeof ElTable & typeof ThTable
export default ThTable   
