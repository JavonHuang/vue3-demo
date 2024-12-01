import SkySlider from "./slider.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElSlider } from 'element-plus'

/** 组件入参 */
export type Slider = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type SliderProps = ExtractPropTypes<Slider>

declare module 'vue' {
  export interface GlobalComponents {
    SkySlider: typeof ElSlider|typeof SkySlider
  }
}