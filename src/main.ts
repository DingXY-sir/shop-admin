/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-10 13:46:42
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-08 16:09:56
 */
import { createApp } from 'vue'
import "@/styles/index.scss"
import App from './App.vue'
import router from "./router/index"
import store from "./store/index"
import 'element-plus/dist/index.css'
import "@/assets/iconfont/iconfont.css"
import * as Icons from "@element-plus/icons-vue";
import components from "@/components/index";
import directives from "@/directives/index"

const app = createApp(App)

// 注册element Icons组件
Object.keys(Icons).forEach(key => {
	app.component(key, Icons[key as keyof typeof Icons]);
});

app.use(router).use(store).use(components).use(directives).mount('#app')

