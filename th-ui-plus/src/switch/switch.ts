import { withInstall } from "../withInstall"
import Switch from "./switch.vue"
import { ElSwitch } from 'element-plus'
export const ThSwitch = withInstall(Switch)
export type ThSwitchProps = typeof ElSwitch & typeof ThSwitch
export default ThSwitch  
