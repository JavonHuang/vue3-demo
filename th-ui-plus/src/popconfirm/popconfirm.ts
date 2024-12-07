import { withInstall } from "../withInstall"
import Popconfirm from "./popconfirm.vue"
import { ElPopconfirm } from 'element-plus'
export const ThPopconfirm = withInstall(Popconfirm)
export type ThPopconfirmProps =  typeof ElPopconfirm & typeof ThPopconfirm
export default ThPopconfirm
