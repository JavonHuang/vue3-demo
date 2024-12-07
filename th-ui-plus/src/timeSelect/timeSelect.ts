import { withInstall } from "../withInstall"
import TimeSelect from "./timeSelect.vue"
import { ElTimeSelect } from 'element-plus'
export const ThTimeSelect = withInstall(TimeSelect)
export type ThTimeSelectProps = typeof ElTimeSelect & typeof ThTimeSelect
export default ThTimeSelect   
