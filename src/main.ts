import { createApp } from "vue";
import "./style.css";
import "./assets/fonts.css";
import router from "./router/index.ts";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
