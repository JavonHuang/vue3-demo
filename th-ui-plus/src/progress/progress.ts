import { withInstall } from "../withInstall"
import Progress from "./progress.vue"
import { ElProgress } from 'element-plus'
export const ThProgress = withInstall(Progress)
export type ThProgressProps =  typeof ElProgress & typeof ThProgress
export default ThProgress
