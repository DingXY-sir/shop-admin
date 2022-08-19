/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-10 13:46:42
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-19 17:50:12
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import Components from "unplugin-vue-components/vite"
import {ElementPlusResolver} from "unplugin-vue-components/resolvers"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [
        ElementPlusResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"), //使用path.resolve也可以实现路径别名
    }
  },
  css: {
    preprocessorOptions: {  //配置scss变量引入
      scss: {
        additionalData: `@import '@/styles/variables.scss';`  
      }
    }
  },
})
