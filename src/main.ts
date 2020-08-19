import Vue from "vue";
import App from "./App.vue";
import "./plugins/elements.ts";
import store from "./store";
// import ItemData from "./model/ItemData";
// import CateEnum from "./model/CateEnum";
// import ActionHelper from "./store/ActionHelper";

// let item = new ItemData(1, CateEnum.Study, "我爱朱亚男4", "hahalala");
// let ah = new ActionHelper();
// ah.add(item);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
