import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'
import {defineNuxtPlugin} from "#app";

export default defineNuxtPlugin(nuxtApp => {
    // ElementPlus
    nuxtApp.vueApp.use(ElementPlus, { size: 'default', zIndex: 3000 });

    // ElementPlus Icons
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        nuxtApp.vueApp.component(key, component)
    }
})
