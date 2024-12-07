import { withInstall } from "../withInstall"
import Empty from "./empty.vue"
import { ElEmpty } from 'element-plus'
export const ThEmpty = withInstall(Empty)
export type ThEmptyProps =  typeof ElEmpty & typeof ThEmpty
export default ThEmpty
