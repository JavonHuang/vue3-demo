import { withInstall } from "../withInstall"
import Rate from "./rate.vue"
import { ElRate } from 'element-plus'
export const ThRate = withInstall(Rate)
export type ThRateProps =  typeof ElRate & typeof ThRate
export default ThRate
