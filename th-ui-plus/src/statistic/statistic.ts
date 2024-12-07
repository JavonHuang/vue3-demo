import { withInstall } from "../withInstall"
import Statistic from "./statistic.vue"
import { ElStatistic } from 'element-plus'
export const ThStatistic = withInstall(Statistic)
export type ThStatisticProps =  typeof ElStatistic & typeof ThStatistic
export default ThStatistic
