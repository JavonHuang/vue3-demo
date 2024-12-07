import { withInstall } from "../withInstall"
import Alert from "./alert.vue"
import { ElAlert } from 'element-plus'
export const ThAlert = withInstall(Alert)
export type ThAlertProps =  typeof ElAlert & typeof ThAlert
export default ThAlert
