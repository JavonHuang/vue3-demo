import { withInstall } from "../withInstall"
import FormItem from "./formItem.vue"
import { ElFormItem } from 'element-plus'
export const ThFormItem = withInstall(FormItem)
export type ThFormItemProps =  typeof ElFormItem & typeof ThFormItem
export default ThFormItem
