import { createApp } from 'vue'
import { App } from './App'
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './configs/routes'

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})
const app = createApp(App)
app.use(router)
app.mount('#app')
