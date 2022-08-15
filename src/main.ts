/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-10 13:46:42
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-15 09:50:04
 */
import { createApp } from 'vue'
// import './style.css'
import "@/styles/index.scss"
import App from './App.vue'
import router from "./router/index"


const app = createApp(App)

app.use(router).mount('#app')

