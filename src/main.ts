/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-10 13:46:42
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-18 09:14:26
 */
import { createApp } from 'vue'
import "@/styles/index.scss"
import App from './App.vue'
import router from "./router/index"
import store from "./store/index"
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router).use(store).mount('#app')

