import { withInstall } from "../withInstall"
import InputNumber from "./number.vue"
import { ElInputNumber } from 'element-plus'
export const ThInputNumber = withInstall(InputNumber)
export type ThInputNumberProps =  typeof ElInputNumber & typeof ThInputNumber
export default ThInputNumber
