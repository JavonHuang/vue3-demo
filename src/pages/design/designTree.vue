<template>
  <component 
    v-for="item in props.nodeList" 
    :key="item.id" 
    :id="item.id" 
    :is="item.component?.code" 
    v-drag:target="item.component?.dragalble" 
    v-on:click.stop="click(item)"
    v-bind="item.component?.props"
    :style="item.component?.style"
    :class="colKls(item)"
    >
    {{item.component?.text}}
    <DesignTree :node-list="item.children"></DesignTree>
  </component>
</template>

<script setup lang="ts">
import { ILibTreeNode } from "@/tool/interface";
import { useDesignStore } from "@/store/useDesignStore";
const store = useDesignStore()

const props = defineProps<{
  nodeList:Array<ILibTreeNode>
}>()

const click = (e:ILibTreeNode) => { 
  store.setSelectNode(e)
}

const colKls = (e:ILibTreeNode) => {
  const classes: string[] = ['drag-tool']
  if (store.selectNode?.id == e.id) { 
    classes.push('is-select')
  }
  return classes
}

</script>
<style lang="scss" scoped>
.is-select{
  border-color: #f89898!important;
}
.is-trage{
  border-color: #409EFF!important;
}
.drag-tool{
  border: 1px dashed #DCDFE6;
}
</style>