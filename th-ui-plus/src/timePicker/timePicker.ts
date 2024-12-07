import { withInstall } from "../withInstall"
import TimePicker from "./timePicker.vue"
import { ElTimePicker } from 'element-plus'
export const ThTimePicker = withInstall(TimePicker)
export type ThTimePickerProps = typeof ElTimePicker & typeof ThTimePicker
export default ThTimePicker   
