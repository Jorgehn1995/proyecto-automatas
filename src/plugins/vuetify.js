import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import colors from "vuetify/lib/util/colors"; // Importar la utilidad de colores

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.blue.base, // Utiliza el color base de azul
        secondary: colors.red.base, // Utiliza el color base de rojo
        accent: colors.pink.base, // Utiliza el color base de rosa
        error: colors.red.accent3, // Un tono de rojo para los errores
        info: colors.lightBlue.base, // Azul claro para información
        success: colors.green.base, // Verde para éxito
        warning: colors.amber.base, // Ámbar para advertencias
      },
      dark: {
        primary: colors.blue.darken4, // Azul oscuro en modo oscuro
        secondary: colors.red.darken4, // Rojo oscuro
        accent: colors.pink.darken4, // Rosa oscuro
        error: colors.red.accent4, // Rojo acentuado para errores en modo oscuro
        info: colors.lightBlue.darken4, // Azul claro oscuro para información
        success: colors.green.darken4, // Verde oscuro para éxito
        warning: colors.amber.darken4, // Ámbar oscuro para advertencias
      },
    },
    dark: false,
  },
});
