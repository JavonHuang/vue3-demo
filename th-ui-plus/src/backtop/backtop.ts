import { withInstall } from "../withInstall"
import Backtop from "./backtop.vue"
import { ElBacktop } from 'element-plus'
export const ThBacktop = withInstall(Backtop)
export type ThBacktopProps =  typeof ElBacktop & typeof ThBacktop
export default ThBacktop
