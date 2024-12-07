import { withInstall } from "../withInstall"
import Checkbox from "./checkbox.vue"
import { ElCheckbox } from 'element-plus'
export const ThCheckbox = withInstall(Checkbox)
export type ThCheckboxProps =  typeof ElCheckbox & typeof ThCheckbox
export default ThCheckbox
