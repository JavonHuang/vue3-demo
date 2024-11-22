import {createRouter,RouteRecordRaw,createWebHashHistory} from "vue-router"


const routeFiles = import.meta.glob('../pages/**/*.vue');
Object.keys(routeFiles).forEach((key) => {
  routeFiles[key]();
});
const routes: Array<RouteRecordRaw> = [
  {
    path:"/login",
    name: "login",
    component:()=>import('@/login.vue')
  },
  {
    path:"/",
    name: "portal",
    component:()=>import('@/portal.vue'),
    children:[
      // ...routesList,
      // {
      //   path:"/home",
      //   name: "home",
      //   component:()=>import('@/pages/home.vue')
      // }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export { router,}