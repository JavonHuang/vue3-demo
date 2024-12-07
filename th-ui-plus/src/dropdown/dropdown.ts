import { withInstall } from "../withInstall"
import Dropdown from "./dropdown.vue"
import { ElDropdown } from 'element-plus'
export const ThDropdown = withInstall(Dropdown)
export type ThDropdownProps =  typeof ElDropdown & typeof ThDropdown
export default ThDropdown
