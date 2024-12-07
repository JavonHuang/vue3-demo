import { withInstall } from "../withInstall"
import Menu from "./menu.vue"
import { ElMenu } from 'element-plus'
export const ThMenu = withInstall(Menu)
export type ThMenuProps =  typeof ElMenu & typeof ThMenu
export default ThMenu
