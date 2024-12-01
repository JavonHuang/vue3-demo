import SkyAffix from "./affix.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElAffix } from 'element-plus'

/** 组件入参 */
export type Affix = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type AffixProps = ExtractPropTypes<Affix>

declare module 'vue' {
  export interface GlobalComponents {
    SkyAffix: typeof ElAffix|typeof SkyAffix
  }
}