import { PropType, ExtractPropTypes } from "vue"

/** 组件入参 */
export type queryProps = {
  width: {
    type: PropType<number>
    required: false;
  },
  columns:PropType<Array<QueryColumnsProps>>
}
type columnType='SkyInput'|'SkyDatePicker';

export  interface QueryColumnsProps{
  type:columnType,
  label:string,
  prop:string,
  props:{
    [key: string]: any;
  }
}

/** 组件参数类型 */
export type QueryProps = ExtractPropTypes<queryProps>