import { withInstall } from "../withInstall"
import TreeV2 from "./treeV2.vue"
import { ElTreeV2 } from 'element-plus'
export const ThTreeV2 = withInstall(TreeV2)
export type ThTreeV2Props = typeof ElTreeV2 & typeof ThTreeV2
export default ThTreeV2   
