import { withInstall } from "../withInstall"
import TableV2 from "./tableV2.vue"
import { ElTableV2 } from 'element-plus'
export const ThTableV2 = withInstall(TableV2)
export type ThTableV2Props = typeof ElTableV2 & typeof ThTableV2
export default ThTableV2   
