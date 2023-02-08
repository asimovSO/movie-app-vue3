import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter } from "vue-router";
import router from "./router";
import Chip from "./components/Chip.vue";
import Pagination from './components/Pagination.vue'
import { createPinia } from "pinia";

const pinia = createPinia()
const app = createApp(App);

app.use(pinia)
app.use(router)
app.mount("#app");

app.component("Chip", Chip);
app.component("Pagination", Pagination)