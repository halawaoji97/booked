import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/scss/index.scss";
import Tabs from "vue3-tabs";

const app = createApp(App);

app.use(router);
app.use(Tabs);

app.mount("#app");
