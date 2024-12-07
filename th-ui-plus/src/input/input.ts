import { withInstall } from "../withInstall"
import Input from "./input.vue"
import { ElInput } from 'element-plus'
export const ThInput = withInstall(Input)
export type ThInputProps =  typeof ElInput & typeof ThInput
export default ThInput
