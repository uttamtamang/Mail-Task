<template>
  <div class="container">
    <h1>Send Your Mail</h1>
    <label for="todayDate">Today is:</label>
    <b-button
      v-on:click="setDateMail(todayDate)"
      id="todayDate"
      variant="primary"
      style="margin:0 5px 5px 5px"
      >{{ todayDate }}</b-button
    >
    <br />
    <div>
      <label for="user-infos">Your Information:</label>

      <b-button @click="addInfo" style="margin:0 0 5px 5px "
        >Add Your Infos</b-button
      >
      <div v-for="(userinfo, index) in infos" :key="index">
        <h1>This is your {{ index + 1 }} info</h1>
        <input v-model="userinfo.key" placeholder="Key" />
        <input v-model="userinfo.value" placeholder="Value" />
        <b-button
          v-on:click="removeInfo(index)"
          variant="danger"
          id="user-info"
          style="margin:0 5px 5px 5px"
          >Remove Infos</b-button
        >
        <br />
      </div>

      <div>
        <textarea
          class="textArea"
          name="sendMail"
          id="sendMail"
          rows="10"
          v-model="mail"
        ></textarea>
        <br />
        <router-link v-bind:to="'/render-mail'">
          <b-button variant="success">Render Mail</b-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SendMail",
  data() {
    return {
      //infos: [],
      infObj: {
        key: "",
        value: "",
      },
    };
  },
  methods: {
    setDateMail(dm) {
      this.$store.dispatch("addDate", dm);
    },

    setName(nm) {
      this.$store.dispatch("addName", nm);
    },
    removeInfo(i) {
      try {
        this.infos.splice(i, 1);
      } catch {
        alert("Not Removed");
      }
    },
    addInfo() {
      let infoObj = {
        key: "",
        value: "",
      };
      this.infos.push(infoObj);
    },
    setAddress(am) {
      this.$store.dispatch("addAddress", am);
    },
  },
  computed: {
    todayDate: {
      set(dt) {
        this.$store.dispatch("addDate", dt);
      },
      get() {
        return this.$store.state.mails.todayDate;
      },
    },

    // userInfo() {
    //   return this.$store.state.mails.userInfo;
    // },
    ...mapState({
      userInfo: (state) => state.mails.userInfo,
    }),

    infos: {
      set(inf) {
        this.$store.dispatch("addInfos", inf);
      },
      get() {
        return this.$store.state.mails.infos;
      },
    },
    // ...mapState({
    //   infos: (state) => state.mails.infos,
    // }),
    mail: {
      set(d) {
        this.$store.dispatch("updateMail", d);
      },
      get() {
        return this.$store.state.mails.mail;
      },
    },
  },
};
</script>

<style scoped>
.textArea {
  width: 100%;
}
</style>
