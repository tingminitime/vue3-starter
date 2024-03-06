import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router/auto'
import './styles/main.css'
import App from './App.vue'

// createApp(App).mount('#app')
const app = createApp(App)
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
})
app.use(router)
app.mount('#app')
