import { withInstall } from "../withInstall"
import Form from "./form.vue"
import { ElForm } from 'element-plus'
export const ThForm = withInstall(Form)
export type ThFormProps =  typeof ElForm & typeof ThForm
export default ThForm
