import { createApp } from 'vue'
import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Main from '@/main.vue'
console.log(import.meta.env.VITE_APP_SERVER)
console.log(import.meta.env)
import { router } from '@/router/index'
import pinia from '@/store/index'

createApp(Main).use(pinia).use(ElementPlus).use(router).mount('#app')
