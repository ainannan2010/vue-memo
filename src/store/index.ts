import Vue from "vue";
// 1.引入vuex
import Vuex from "vuex";
import ActionHelper from "./ActionHelper";
// 2. 注册vuex到vue
Vue.use(Vuex);
// 3. 创建vuex的仓库对象, state存放共享对象和数据， mutations存放共享方法
const store = new Vuex.Store({
  state: {
    title: "我是黑马, who flies",
    isShow: false,
    transMemo: null, // 副本
    ahelper: new ActionHelper()
  },
  mutations: {
    showEditor(state, payload) {
      state.transMemo = payload;
      state.isShow = true;
    },
    hideEditor(state) {
      state.isShow = false;
    }
  }
});
// 4. 导出仓库
export default store;
