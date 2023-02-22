import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#ffc107",
        secondary: "#ff9800",
        accent: "#795548",
        error: "#ff5722",
        warning: "#cddc39",
        info: "#607d8b",
        success: "#4caf50",
      },
    },
  },
});
