import { withInstall } from "../withInstall"
import ColorPicker from "./colorPicker.vue"
import { ElColorPicker } from 'element-plus'
export const ThColorPicker = withInstall(ColorPicker)
export type ThColorPickerProps =  typeof ElColorPicker & typeof ThColorPicker
export default ThColorPicker
