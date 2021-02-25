import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./plugins/bootstrap-vue";

//ROUTINGS
import VueRouter from "vue-router";
import SendMail from "./components/SendMail";
import RenderMail from "./components/RenderMail.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: SendMail },
  { path: "/render-mail", component: RenderMail },
];

const router = new VueRouter({
  routes,
});

Vue.config.productionTip = false;

new Vue({
  store,
  router: router,
  render: (h) => h(App),
}).$mount("#app");
