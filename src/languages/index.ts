/*
 * @Descripttion:创建i18n实例
 * @Author: DXY
 * @Date: 2022-11-02 15:38:22
 * @LastEditors: DXY
 * @LastEditTime: 2022-11-02 15:50:50
 */
import { createI18n } from "vue-i18n";
import zh from "./modules/zh";
import en from "./modules/en";

const i18n = createI18n({
  legacy: false, // 如果要支持 compositionAPI，此项必须设置为 false
  locale: "zh", // 设置语言类型
  globalInjection: true, // 全局注册$t方法
  messages: {
    zh,
    en,
  },
});

export default i18n;
