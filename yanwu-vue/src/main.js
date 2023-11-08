import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)

// 将路由添加到应用
app.use(router)

app.mount('#app')
