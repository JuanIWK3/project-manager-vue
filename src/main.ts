import { createRouter, createWebHashHistory } from "vue-router";
// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import { createPinia } from "pinia";

// Plugins
import { registerPlugins } from "@/plugins";
import vuetify from "./plugins/vuetify";

// Pages
import ProjectListVue from "./components/ProjectList.vue";
import Devs from "@/pages/Devs.vue";

const app = createApp(App);
const pinia = createPinia();

registerPlugins();

const routes = [
  {
    path: "/",
    component: ProjectListVue,
  },

  {
    path: "/devs",
    component: Devs,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// app.use(router);
app.use(pinia);
app.use(vuetify);
app.mount("#app");
