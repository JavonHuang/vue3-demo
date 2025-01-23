import { defineStore } from "pinia";
import { reactive, ref } from "vue";

/**
 * id 树组件id
 * component 组件
 * children 子节点
 */
interface ILibTreeNode {
  id: string;
  component: componentProps|undefined;
  children?: ILibTreeNode[] | undefined;
}
 

/**
 * code 组件编码
 * name 组件名
 * text 默认子节点
 * dragalble 允许拖如入子节点
 * props 组件属性
 */
interface componentProps { 
  code: string
  name: string
  text?: string
  dragalble?:boolean
  props: {
    [key:string]:any
  },
  style?: {
    [key:string]:any
  }
}

export type { ILibTreeNode, componentProps }

export type Direction='left'|'right'|'up'|'down'

export const useDesignStore = defineStore('libStore', () => {
  const dragNodeCode=ref<string|null>(null)
  const libList = reactive<ILibTreeNode>({
    id: 'root',
    component: { dragalble: true, code: 'ElRow', name: "根节点", props: {}, style: {} },
    children: [],
  })
  const selectNode=ref<ILibTreeNode|null>()

  /**
   * 设置正在拖动的节点类型
   * @param code 组件code
   */
  function setDragNode(e:string|null) { 
    dragNodeCode.value = e
  }
  
  /**
   * 插入新节点
   * @param nodeId 父节点
   * @param childrenNode 新节点
   * @param d 方向
   */
  function insertChildNode(nodeId: string, childrenNode: ILibTreeNode,d:Direction) {
    let node:ILibTreeNode=findNode(libList,nodeId)!
    if (node.children) {
      if (d == 'right' || d == 'down') {
        node.children.push(childrenNode);
      } else { 
        node.children.unshift(childrenNode);
      }
    } else {
        node.children = [childrenNode];
    }
  }
  /**
   * 根据ID查找指定节点
   * @param node 根节点
   * @param id 指定id
   * @returns 目标节点
   */
  function findNode(node:ILibTreeNode, id:string):ILibTreeNode|undefined|null {
    if (node.id === id) {
      return node;
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        var found = findNode(node.children[i], id);
        if (found) {
          return found;
        }
      }
    }
    return null;
  }

  /**
   * 保存选中的节点
   * @param node 
   */
  function setSelectNode(node:ILibTreeNode) {
    selectNode.value=node
  }

  /**
   * 更细指定节点
   * @param nodeId 
   * @param childrenNode 
   */
  function updateNode(nodeId: string, childrenNode: ILibTreeNode) { 
    let node:ILibTreeNode=findNode(libList,nodeId)!
    node = childrenNode;
  }

  /**
   * 删除指定ID节点
   * @param id 
   */
  function removeNode(id: string) {
    if (selectNode.value!=null &&selectNode.value.id == id) { 
      selectNode.value=null
    }
    function findAndRemove(node:ILibTreeNode, id:string) {
      if (node.id === id) {
        // 如果找到了节点，返回null表示删除
        return null;
      }
      if (node.children) {
        node.children = node.children.filter((child:ILibTreeNode) => findAndRemove(child, id));
      }
      // 如果没有删除节点，返回当前节点
      return node;
    }
    findAndRemove(libList, id);
  }
    
  
  return { dragNodeCode,libList,selectNode,insertChildNode,findNode,setDragNode,setSelectNode,updateNode,removeNode } 
})