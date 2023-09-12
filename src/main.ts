import { createApp } from "vue";
import App from "./App.vue";
import "./assets/style/tailwind.css";
import "./registerServiceWorker";
import router from "./router";

const app = createApp(App); //creating vue app instance

app.use(router);
app.mount("#app");
