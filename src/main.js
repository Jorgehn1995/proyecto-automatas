import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import api from "./plugins/api"; // Importa el plugin de Axios
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

Vue.use(api); // Usa el plugin de Axios

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
