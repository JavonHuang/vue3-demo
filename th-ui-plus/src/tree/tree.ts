import { withInstall } from "../withInstall"
import Tree from "./tree.vue"
import { ElTree } from 'element-plus'
export const ThTree = withInstall(Tree)
export type TreeInstance = InstanceType<typeof ElTree>;
export type ThTreeProps = typeof ElTree & typeof ThTree
export default ThTree   
