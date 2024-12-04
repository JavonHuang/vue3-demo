import { createApp } from 'vue'
import './style.css'
// import ElementPlus from 'element-plus'
import DBelement from "@/components/index"

// import 'element-plus/dist/index.css'
import Main from '@/main.vue'
console.log(import.meta.env)
import { router } from '@/router/index'
import pinia from '@/store/index'
const app=createApp(Main)
// app.use(ElementPlus)
app.use(pinia).use(DBelement).use(router).mount('#app')
