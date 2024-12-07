import { createApp } from 'vue'
import './style.css'
// import ThUI from 'th-ui-plus'
import ThUI from './../th-ui-plus/index'
// import 'th-ui-plus/lib/src/index.css'

// import ElementPlus from 'element-plus'
// import 'element-plus/dist/index.css'

// import DBelement from "@/components/index"

import Main from '@/main.vue'
console.log(import.meta.env)
import { router } from '@/router/index'
import pinia from '@/store/index'
const app=createApp(Main)
// app.use(ElementPlus)
// app.use(DBelement)
app.use(ThUI)
app.use(pinia).use(router).mount('#app')
