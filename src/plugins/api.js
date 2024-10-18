// src/plugins/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api", // Cambia esto a la URL de tu API
});

// Creamos un plugin para inyectar Axios como $api
export default {
  install(Vue) {
    Vue.prototype.$api = api; // Inyectamos la instancia de Axios como $api en Vue 2
  },
};
