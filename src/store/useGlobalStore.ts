import { defineStore } from "pinia";
import { computed, ref } from "vue";
import request from '@/api/commonApi';
import { router } from '@/router/index'

export const useGlobalStore = defineStore('global', () => {
  const isLogin = ref<boolean>(false)
  const menuList = ref<Array<any>>([])

  const login = (data: { name: string, passworld: string }): Promise<any> => {
    return new Promise(async (resolve) => {
      await request.login(data).then((e) => {
        isLogin.value = true;
        resolve(e)
      });
      await menu();
    })
  }

  const menu = (): Promise<boolean> => {
    return new Promise((resolve) => {
      if (!isLogin.value) {
        router.push({
          path: "/login",
        })
        resolve(false)
      } else {
        menuList.value = [
          {
            "url": "/home_use",
            "path": "/src/pages/common/home.vue",
            "name": "home"
          },
          {
            "url": "/demo1_use",
            "path": "/src/pages/common/demo1.vue",
            "name": "列表查询"
          },
          {
            "url": "/demo2_use",
            "path": "/src/pages/common/demo2.vue",
            "name": "表单生成"
          },
          {
            "url": "/report1_use",
            "path": "/src/pages/report/reportDemo1.vue",
            "name": "report1"
          },
          {
            "url": "/report2_use",
            "path": "/src/pages/report/reportDemo2.vue",
            "name": "report2"
          }
        ]
        menuList.value.forEach((item: any) => {
          router.addRoute('portal', {
            path: item.url,
            name: item.name,
            component: () => import(item.path)
          });
        });
        setTimeout(() => {
          resolve(true)
        }, 500)
        // request.menu().then((e) => {
        //   menuList.value = e.data
        //   e.data.forEach((item: any) => {
        //     return router.addRoute('portal', {
        //       path: item.url,
        //       name: item.name,
        //       component: () => import(item.path)
        //     });
        //   });
        //   resolve(true)
        // });
      }
    })
  }

  const systemMenu = computed(() => menuList.value)


  return { isLogin, login, menu, systemMenu }
}, {
  persist: {
    pick: ['isLogin']
  }
})