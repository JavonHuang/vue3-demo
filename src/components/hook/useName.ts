import {LIB_NAME} from "../constants/lib"

export const useName = (componentName: string,)=>{
  const libName = ()=>`${LIB_NAME}`
  const base = () =>`${LIB_NAME}-${componentName}`
  const is = (cls:string) =>`${LIB_NAME}-is-${cls}`
  return {libName,base,is}
}