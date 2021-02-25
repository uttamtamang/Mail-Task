export default {
  updateMail(state, payload) {
    state.mail = payload;
  },
  mailWithDate(state, newMail) {
    state.mail = state.mail.concat(newMail);
  },

  mailWithName(state, nameMail) {
    state.mail = state.mail + "" + nameMail;
  },

  mailWithAddress(state, addressMail) {
    state.mail = state.mail + "" + addressMail;
  },

  addInfos(state, infoObj) {
    state.infos = infoObj;
  },
};
