/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-10 13:46:42
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-16 14:00:37
 */
import { createApp } from 'vue'
import "@/styles/index.scss"
import App from './App.vue'
import router from "./router/index"
import store from "./store/index"

const app = createApp(App)

app.use(router).use(store).mount('#app')

