import SkyAutocomplete from "./autocomplete.vue"
import { PropType, ExtractPropTypes } from "vue"
import { ElAutocomplete } from 'element-plus'

/** 组件入参 */
export type Autocomplete = {
    /** 按钮类型 */
    text?: {
        type: PropType<string>
        required: false;
    }
}

/** 组件参数类型 */
export type AutocompleteProps = ExtractPropTypes<Autocomplete>

declare module 'vue' {
  export interface GlobalComponents {
    SkyAutocomplete: typeof ElAutocomplete & typeof SkyAutocomplete
  }
}