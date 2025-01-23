<template>
  <div class="design">
    <DesignTree :node-list="[libList]"></DesignTree>
  </div>
</template>

<script setup lang="ts">
import { useDesignStore } from "@/store/useDesignStore";
import DesignTree from "./designTree.vue"
import { storeToRefs } from 'pinia'
const store = useDesignStore()
const { libList } = storeToRefs(store)


</script>
<style lang="scss" scoped>
.design{
  flex: 1;
  margin: 4px 8px;
  :deep(.el-row.drag-tool){
    min-height:32px;
    // width: 100%;
    padding: 4px;
  }
  :deep(.el-col.drag-tool){
    padding: 4px;
  }
}
</style>