import { withInstall } from "../withInstall"
import Icon from "./icon.vue"
import { ElIcon } from 'element-plus'
export const ThIcon = withInstall(Icon)
export type ThIconProps =  typeof ElIcon & typeof ThIcon
export default ThIcon
