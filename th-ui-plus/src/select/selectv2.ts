import { withInstall } from "../withInstall"
import SelectV2 from "./selectv2.vue"
import { ElSelectV2 } from 'element-plus'
export const ThSelectV2 = withInstall(SelectV2)
export type ThSelectV2Props =  typeof ElSelectV2 & typeof ThSelectV2
export default ThSelectV2
