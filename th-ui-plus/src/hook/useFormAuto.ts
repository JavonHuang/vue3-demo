import _ from 'lodash'
import { Ref } from "vue"
import { FormAutoColumnsProps } from "../formAuto/formAuto"
import { IComponentProps } from '../common'

type ColumnsKey= keyof FormAutoColumnsProps
type ColumnsPropsKey= keyof IComponentProps
const useFormAuto = (columns:Ref<Array<FormAutoColumnsProps>>)=>{
  const updateColumn=(prop:string,key:ColumnsKey,value:any)=>{
   const index=_.findIndex(columns.value,{prop:prop})
   if(index>-1){
    (columns.value[index][key] as any)=value
   }
  }
  const updateColumnProps=(prop:string,key:ColumnsPropsKey,value:unknown)=>{
    const index=_.findIndex(columns.value,{prop:prop})
    if(index>-1){
     columns.value[index].props![key]=value
    }
   }
  return {
    updateColumn,
    updateColumnProps,
  }
}

export {useFormAuto}