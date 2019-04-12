import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
let defaultCity=localStorage.city||"成都";
const state={
  "city":defaultCity
}
const mutations={
  changeCityName (state,cityName){
    state.city=cityName;
    localStorage.city=cityName;
  }
}
export default new Vuex.Store({
  state,
  mutations
});