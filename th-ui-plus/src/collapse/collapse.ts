import { withInstall } from "../withInstall"
import Collapse from "./collapse.vue"
import { ElCollapse } from 'element-plus'
export const ThCollapse = withInstall(Collapse)
export type ThCollapseProps =  typeof ElCollapse & typeof ThCollapse
export default ThCollapse
