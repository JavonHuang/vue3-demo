import { withInstall } from "../withInstall"
import Button from "./button.vue"
import { ElButton } from 'element-plus'
export const ThButton = withInstall(Button)
export type ThButtonProps =  typeof ElButton & typeof ThButton
export default ThButton
