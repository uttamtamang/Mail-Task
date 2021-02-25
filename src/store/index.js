import Vue from "vue";
import Vuex from "vuex";
import mails from "./modules/mails";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    mails,
  },
});
