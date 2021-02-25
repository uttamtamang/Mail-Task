<template>
  <div>
    <h2 v-text="renderd">
      Your mail will render here
    </h2>
  </div>
</template>

<script>
export default {
  name: "RenderMail",
  computed: {
    mail() {
      return this.$store.state.mails.mail;
    },
    todayDate() {
      return this.$store.state.mails.todayDate;
    },
    infos() {
      return this.$store.state.mails.infos;
    },
    renderd() {
      try {
        var text = this.mail;
        text = text
          .replace("{{date}}", this.todayDate)
          .replace("{{name}}", this.infos.slice(-1)[0].key)
          .replace("{{address}}", this.infos.slice(-1)[0].value);
        return text;
      } catch {
        alert("something went wrong, please add all required items");
      }
      return text;
    },
  },
};
</script>

<style></style>
