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
      {
        path: '/notfound', // 通配符路由，匹配任何路径
        name: 'NotFound', // 命名路由 'NotFound'
        component: ()=>import('@/pages/common/notFound.vue') // 404 页面组件
      }    
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from,next) => {
  const routeExists = router.getRoutes().some(route => route.name === to.name);
  if (routeExists) {
    next(); // 如果路由存在，继续正常的导航
  } else {
    next({ name: 'NotFound' }); // 如果路由不存在，重定向到 NotFound 路由
  }
})
export { router,}