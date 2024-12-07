import { withInstall } from "../withInstall"
import Select from "./select.vue"
import { ElSelect } from 'element-plus'
export const ThSelect = withInstall(Select)
export type ThSelectProps =  typeof ElSelect & typeof ThSelect
export default ThSelect
