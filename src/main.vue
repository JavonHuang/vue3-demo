<template>
  <th-config-provider>
    <router-view></router-view>
  </th-config-provider>
</template>
<script setup lang='ts'>
import { useGlobalStore } from "@/store/useGlobalStore"
import { router } from '@/router/index'
import { useRouter } from 'vue-router';
const route = useRouter()
const globalStore = useGlobalStore()
globalStore.menu().then((e) => {
  if (e) {
    router.push({
      path: route.currentRoute.value.fullPath,
    })
  }
})

</script>
