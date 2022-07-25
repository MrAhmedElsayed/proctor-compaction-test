import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import ar from "vuetify/lib/locale/ar";
import en from "vuetify/lib/locale/en";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,
  lang: {
    locales: { en, ar },
    current: "ar",
  },
  icons: {
    iconfont: "mdi" || "mdiSvg",
  },
});
