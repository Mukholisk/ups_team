import { defineNuxtPlugin } from '#app'
import ElementPlus, { ID_INJECTION_KEY } from 'element-plus'
import 'element-plus/dist/index.css'
import ko from 'element-plus/lib/locale/lang/ko'
import * as Icons from '@element-plus/icons-vue'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ElementPlus, { size: 'default', zIndex: 3000, locale: ko })
    Object.keys(Icons).forEach((key) => {
        nuxtApp.vueApp.component(`icon-${key.toLowerCase()}`, Icons[key])
    })

    nuxtApp.vueApp.provide(ID_INJECTION_KEY, {
        prefix: Math.floor(Math.random() * 10000),
        current: 0,
    })
})
