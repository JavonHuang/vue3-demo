import { withInstall } from "../withInstall"
import TreeSelect from "./treeSelect.vue"
import { ElTreeSelect } from 'element-plus'
export const ThTreeSelect = withInstall(TreeSelect)
export type ThTreeSelectProps = typeof ElTreeSelect & typeof ThTreeSelect
export default ThTreeSelect   
