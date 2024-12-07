import { withInstall } from "../withInstall"
import Result from "./result.vue"
import { ElResult } from 'element-plus'
export const ThResult = withInstall(Result)
export type ThResultProps =  typeof ElResult & typeof ThResult
export default ThResult
