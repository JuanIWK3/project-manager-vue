// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { createPinia } from "pinia";

// Plugins
import { registerPlugins } from "@/plugins";
import vuetify from "./plugins/vuetify";

const app = createApp(App);
const pinia = createPinia();

registerPlugins();

app.use(pinia);
app.use(vuetify);
app.mount("#app");
