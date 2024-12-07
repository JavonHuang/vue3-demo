import { withInstall } from "../withInstall"
import DropdownItem from "./dropdownItem.vue"
import { ElDropdownItem } from 'element-plus'
export const ThDropdownItem = withInstall(DropdownItem)
export type ThDropdownItemProps =  typeof ElDropdownItem & typeof ThDropdownItem
export default ThDropdownItem
