import { withInstall } from "../withInstall"
import DatePicker from "./datePicker.vue"
import { ElDatePicker } from 'element-plus'
export const ThDatePicker = withInstall(DatePicker)
export type ThDatePickerProps =  typeof ElDatePicker & typeof ThDatePicker
export default ThDatePicker
