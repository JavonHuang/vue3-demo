import {createRouter,RouteRecordRaw,createWebHashHistory} from "vue-router"

const routeFiles = import.meta.glob('../pages/*.vue'); // 获取所有views文件下的.vue文件
console.log(routeFiles);
const routesList:Array<any>= [] // 储存符合路由页面的对象内容

Object.keys(routeFiles).forEach(key => {
  routeFiles[key]();

  // if (key.indexOf('components') === -1) {// 排除组件 和 不需要自动注册的路由
  //   const name = key!.match(/\.\/(.+)\.vue$/)![1].split('/')[1];
  //   const component = routeFiles[key];
  //   console.log(name);
  //   routesList.push({
  //     path: `/${name.toLowerCase()}`,
  //     component: component,
  //     name: name
  //   });
  // }
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
      ...routesList,
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