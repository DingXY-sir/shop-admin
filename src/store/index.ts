/*
 * @Descripttion: 
 * @Author: DXY
 * @Date: 2022-08-16 13:58:44
 * @LastEditors: DXY
 * @LastEditTime: 2022-08-16 14:00:10
 */
import { createPinia } from "pinia"
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()
store.use(piniaPluginPersist)

export default store