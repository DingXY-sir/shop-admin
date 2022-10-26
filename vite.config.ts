/*
 * @Descripttion:
 * @Author: DXY
 * @Date: 2022-08-10 13:46:42
 * @LastEditors: DXY
 * @LastEditTime: 2022-10-17 13:30:18
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import eslintPlugin from "vite-plugin-eslint";
// import topLevelAwait from "vite-plugin-top-level-await";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
  },
  plugins: [
    // topLevelAwait({
    //   // The export name of top-level await promise for each chunk module
    //   promiseExportName: "__tla",
    //   // The function to generate import names of top-level await promise in each chunk module
    //   promiseImportName: i => `__tla_${i}`,
    // }),
    vue(),
    // * EsLint 报错信息显示在浏览器界面上
    eslintPlugin(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.join(__dirname, "./src"), //使用path.resolve也可以实现路径别名
    },
  },
  css: {
    preprocessorOptions: {
      //配置scss变量引入
      scss: {
        additionalData: `@import '@/styles/variables.scss';`,
      },
    },
  },
});
