import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./assets/tailwind.css";
import DarkMode from "./components/DarkMode.vue";
import VueScrollactive from "vue-scrollactive";
import VueSplide from "@splidejs/vue-splide";

createApp(App)
  .use(router)
  .use(VueScrollactive)
  .use(VueSplide)
  .component("dark-mode", DarkMode)
  .mount("#app");
