import { withInstall } from "../withInstall"
import Col from "./col.vue"
import { ElCol } from 'element-plus'
export const ThCol = withInstall(Col)
export type ThColProps =  typeof ElCol & typeof ThCol
export default ThCol
