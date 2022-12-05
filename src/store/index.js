/*
 * @Author: Han
 * @Date: 2022-05-12 11:34:27
 * @LastEditors: Han
 * @LastEditTime: 2022-05-13 10:49:53
 * @FilePath: \apiadmin\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listTableData: [],
  },
  getters: {},
  mutations: {
    setListTableData(state, x) {
      state.listTableData = x;
    },
  },
  actions: {},
  modules: {},
});
