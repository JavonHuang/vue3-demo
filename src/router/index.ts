import {createRouter,RouteRecordRaw,createWebHashHistory} from "vue-router"
import allModule from "./module";

if(Object.keys(allModule).length>0){
  Object.keys(allModule).forEach((key:string) => {
    allModule[key]();
  });
}
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