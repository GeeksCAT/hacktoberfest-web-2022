import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { plugin, defaultConfig } from '@formkit/vue'

import '@formkit/themes/genesis'
import './assets/styles/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(plugin, defaultConfig)

app.mount('#app')
