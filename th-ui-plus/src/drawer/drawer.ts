import { withInstall } from "../withInstall"
import Drawer from "./drawer.vue"
import { ElDrawer } from 'element-plus'
export const ThDrawer = withInstall(Drawer)
export type ThDrawerProps =  typeof ElDrawer & typeof ThDrawer
export default ThDrawer
