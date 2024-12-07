import { withInstall } from "../withInstall"
import Radio from "./radio.vue"
import { ElRadio } from 'element-plus'
export const ThRadio = withInstall(Radio)
export type ThRadioProps =  typeof ElRadio & typeof ThRadio
export default ThRadio
