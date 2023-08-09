import Vue from "vue";
import App from "./App.vue";

import "./assets/index.scss";

import VueVirtualTree from "./components/ve-tree.vue";
Vue.component("VueVirtualTree", VueVirtualTree);

new Vue({
  el: "#app",
  render: h => h(App)
});
