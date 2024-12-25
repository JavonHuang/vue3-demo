import _ from 'lodash'
export function cloneTree(arr:Array<any>,fn:(e:any)=>void){
  return _.map(arr,node=>{
    const cloneNode=_.cloneDeep(node)
    fn(cloneNode)
    if(cloneNode.children && cloneNode.children.length>0){
      cloneNode.children=cloneTree(cloneNode.children,fn)
    }
    return cloneNode
  })
}

export const generateID = ():string => { 
  let timestamp = new Date().getTime();
  const uuid = 'xxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (timestamp + Math.random() * 16) % 16 | 0;
    timestamp = Math.floor(timestamp / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}