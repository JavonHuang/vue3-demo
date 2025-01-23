import { Directive } from "vue"
import { useDesignStore } from "@/store/useDesignStore"
import { storeToRefs } from "pinia"
import { Direction } from "@/tool/interface"
import { findLib } from './libShow'

export const generateID = ():string => { 
  let timestamp = new Date().getTime();
  const uuid = 'xxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = (timestamp + Math.random() * 16) % 16 | 0;
    timestamp = Math.floor(timestamp / 16);
    return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

const drag: Directive = {
  mounted(el: HTMLDivElement, binding, vnode, prevVnode) { 
    const store = useDesignStore()
    const { setDragNode, insertChildNode } = store
    
    el.setAttribute('draggable', 'true')

    //用户开始拖拉时，在被拖拉的节点上触发，该事件的target属性是被拖拉的节点。通常应该在这个事件的监听函数中，指定拖拉的数据。
    el.addEventListener('dragstart', (e: DragEvent) => { 
      let dom=e.target! as HTMLDivElement
      dom.style.backgroundColor = 'red';
      // setDragNode(el.getAttribute('code'))
    })
    //拖拉结束时（释放鼠标键或按下 ESC 键）在被拖拉的节点上触发，该事件的target属性是被拖拉的节点。它与dragstart事件，在同一个节点上触发。不管拖拉是否跨窗口，或者中途被取消，dragend事件总是会触发的。
    el.addEventListener('dragend', (e: DragEvent) => { 
      let dom=e.target! as HTMLDivElement
      dom.style.backgroundColor = '';
      setDragNode(null)
    })

    if (binding.value) { 
      //拖拉到当前节点上方时，在当前节点上持续触发（相隔几百毫秒），该事件的target属性是当前节点。该事件与dragenter事件的区别是，dragenter事件在进入该节点时触发，然后只要没有离开这个节点，dragover事件会持续触发。
      el.addEventListener('dragover', (e: DragEvent) => { 
        e.stopPropagation();
        e.preventDefault();
        e.dataTransfer!.dropEffect = 'move';
        let dom=e.target! as HTMLDivElement
        // dom.style.borderColor="#409EFF"
        dom.classList.add('is-trage')
      })
      //拖拉操作离开当前节点范围时，在当前节点上触发，该事件的target属性是当前节点。如果要在视觉上显示拖拉离开操作当前节点，就在这个事件的监听函数中设置。
      el.addEventListener('dragleave', (e: DragEvent) => { 
        let dom=e.target! as HTMLDivElement
        // dom.style.borderColor = "#CDD0D6"
        dom.classList.remove('is-trage')

        e.stopPropagation();
        e.preventDefault();
      })
      
      //被拖拉的节点或选中的文本，释放到目标节点时，在目标节点上触发。注意，如果当前节点不允许drop，即使在该节点上方松开鼠标键，也不会触发该事件。如果用户按下 ESC 键，取消这个操作，也不会触发该事件。该事件的监听函数负责取出拖拉数据，并进行相关处理。
      el.addEventListener('drop', (e: DragEvent) => { 
        const { dragNodeCode } = storeToRefs(store)
        e.stopPropagation();
        e.preventDefault();
        let dropDirection:Direction = "down"
        let dom=e.target! as HTMLDivElement

        const x = e.clientX -dom.getBoundingClientRect().left;
        const y = e.clientY - dom.getBoundingClientRect().top;
        if (x <dom.clientWidth / 2) {
          dropDirection = 'left';
        } else if (x > dom.clientWidth / 2) {
          dropDirection = 'right';
        }
        if (y <dom.clientHeight / 2) {
          dropDirection = 'up';
        } else if (y >dom.clientHeight / 2) {
          dropDirection = 'down';
        }

        insertChildNode(el.getAttribute('id')!, {
          id: generateID(),
          component: findLib(dragNodeCode.value!),
          children: [],
        },dropDirection)
        // dom.style.borderColor = "#CDD0D6"
        dom.classList.remove('is-trage')
        setDragNode(null)
      })
    }
  }
}

export default drag