import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routers/Router.vue";


createApp(App).use(router).mount('#app')
