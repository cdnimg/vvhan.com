/*
 * @Author: Han
 * @Date: 2022-05-12 11:34:27
 * @LastEditors: Han
 * @LastEditTime: 2022-05-13 10:04:42
 * @FilePath: \apiadmin\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 载入Element-UI组件库
import "@/plugins/element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
