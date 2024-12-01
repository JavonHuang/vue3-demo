import SkyTour from "./tour.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElTour } from 'element-plus'

/** 组件入参 */
export type Tour = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type TourProps = ExtractPropTypes<Tour>

declare module 'vue' {
  export interface GlobalComponents {
    SkyTour: typeof ElTour & typeof SkyTour
  }
}