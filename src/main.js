import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter } from 'vue-router'
import router from './router'
import Chip from './components/Chip.vue'

createApp(App).use(router).component('Chip', Chip).mount('#app')

