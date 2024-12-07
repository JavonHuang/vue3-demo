import { withInstall } from "../withInstall"
import Calendar from "./calendar.vue"
import { ElCalendar } from 'element-plus'
export const ThCalendar = withInstall(Calendar)
export type ThCalendarProps =  typeof ElCalendar & typeof ThCalendar
export default ThCalendar
