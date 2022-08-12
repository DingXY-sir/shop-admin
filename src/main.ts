/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-10 13:46:42
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-12 13:56:33
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index"

const app = createApp(App)

app.use(router).mount('#app')

