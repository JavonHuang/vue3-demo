import SkyColorPicker from "./colorPicker.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElColorPicker } from 'element-plus'

/** 组件入参 */
export type ColorPicker = {
    /** 按钮类型 */
    text: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type ColorPickerProps = ExtractPropTypes<ColorPicker>

declare module 'vue' {
  export interface GlobalComponents {
    SkyColorPicker: typeof ElColorPicker|typeof SkyColorPicker
  }
}