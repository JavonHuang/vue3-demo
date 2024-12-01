import SkyStatistic from "./statistic.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElStatistic } from 'element-plus'

/** 组件入参 */
export type Statistic = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type StatisticProps = ExtractPropTypes<Statistic>

declare module 'vue' {
  export interface GlobalComponents {
    SkyStatistic: typeof ElStatistic|typeof SkyStatistic
  }
}