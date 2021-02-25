const state = {
  testDate: new Date(),
  todayDate: new Date(),
  name: "Uttam",
  address: "address1",
  userInfo: [{ name: "Uttam Tamang", address: "Sundarijal" }],
  fromDate: "",
  toDate: "",

  infos: [],
  mail: "",
};
// const getters = {
//   mails: (state) => state.mail,
// };
const actions = {
  updateMail({ commit }, payload) {
    commit("updateMail", payload);
  },

  addDate({ commit }, dateToMail) {
    commit("mailWithDate", dateToMail);
  },

  addName({ commit }, nameToMail) {
    commit("mailWithName", nameToMail);
  },

  addAddress({ commit }, addressToMail) {
    commit("mailWithAddress", addressToMail);
  },

  addInfos({ commit }, newInfos) {
    commit("addingInfos", newInfos);
  },
};
// const mutations = {
//   updateMail(state, payload) {
//     state.mail = payload.mail
//   }
// };

import mutations from "./mutations";
export default {
  state,
  getters: {
    mails: (state) => state.mail,
    todayDate: (state) => state.todayDate.getFullYear(),
    userInfo: (state) => state.userInfo,
    infos: (state) => state.infos,
  },
  actions,
  mutations,
};
