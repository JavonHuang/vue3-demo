import { withInstall } from "../withInstall"
import MenuItem from "./menuItem.vue"
import { ElMenuItem } from 'element-plus'
export const ThMenuItem = withInstall(MenuItem)
export type ThMenuItemProps =  typeof ElMenuItem & typeof ThMenuItem
export default ThMenuItem
