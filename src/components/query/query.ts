import ThQuery from "./query.vue"

type columnType='ThInput'|'ThDatePicker'|'ThSelect';
export  interface QueryColumnsProps{
  type:columnType,
  label:string,
  prop:string,
  value:any
  props:{
    [key: string]: any;
  }
}

export type ThQuery= typeof ThQuery
