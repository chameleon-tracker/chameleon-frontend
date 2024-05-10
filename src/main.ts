import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification'
import { router } from '@/router'
import './style.css'
import 'vue-toastification/dist/index.css'

createApp(App)
.use(Toast)
.use(router)
.mount('#app')
