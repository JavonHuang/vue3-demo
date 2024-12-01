import SkyBacktop from "./backtop.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElAffix } from 'element-plus'

/** 组件入参 */
export type Backtop = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type BacktopProps = ExtractPropTypes<Backtop>

declare module 'vue' {
  export interface GlobalComponents {
    SkyBacktop: typeof ElAffix|typeof SkyBacktop
  }
}