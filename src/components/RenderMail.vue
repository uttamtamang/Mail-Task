<template>
  <div>
    <h2 v-text="renderd">
      Your mail will render here
    </h2>
    <br />
    <h2 v-for="info in infos" :key="info.index">
      {{ info }}
    </h2>
    <!-- <div>
      <button
        v-for="info in infos"
        :key="info.index"
        v-on:click="renderMail(info.index)"
      >
        Click here
      </button>
      <h2
        v-for="info in infos"
        :key="info.index"
        v-on:load="renderMail(info.index)"
      ></h2>
      <p id="infoMail"></p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "RenderMail",
  methods: {
    // checkKey(key) {
    //   if (key == "name") {
    //     return "name";
    //   } else {
    //     return "address";
    //   }
    // },
    renderMail(i) {
      var textMail = this.mail;
      var names = this.infos;
      textMail = textMail
        .replace("{{date}}", this.todayDate)
        .replace("key", names[i].value);
      document.getElementById("infoMail").innerHTML = textMail;
    },
  },
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
    //TEST
    // yourMail: function(i) {
    //   var text = this.mail;
    //   // var names = this.infos;
    //   text = text
    //     .replace("date", this.todayDate)
    //     .replace("name", this.infos[i].value);

    //   console.log(this.infos[i]);

    //   return text;
    // },
    renderd() {
      // var text = this.mail;
      // var names = this.infos;
      // text = text
      //   .replace("{{date}}", this.todayDate)
      //   .replace("key", names[1].value);
      // return text;

      var text = this.mail;
      // var valueText = this.mail;
      // var names = this.infos;
      // var indexLength = names.length;
      // alert(indexLength);
      // var i;
      for (var i = 0; i < this.infos.length; ++i) {
        text = text.replace("name", this.infos[i].value);
        // alert(text);
        // console.log(this.infos[i].value);
        // console.log(valueText);
        return text;
      }
      return text;

      // try {
      //   var text = this.mail;
      //   var names = this.infos;
      //   // text = text
      //   //   .replace("{{date}}", this.todayDate)
      //   //   .replace("key", names[1].value);
      //   // return text;

      //   var indexLength = names.length;
      //   var i;
      //   // alert(indexLength);
      //   for (i = 0; i < indexLength; i++) {
      //     text = text
      //       .replace("date", this.todayDate)
      //       .replace("name", names[i].value);
      //     alert(text);
      //      return text;
      //     // continue;
      //     // .replace("key", names[index].value);
      //   }

      //   // for (x in names) {
      //   //   text += names[x].value;
      //   //   return text;
      //   // }

      //   // names.foreach(element,index, names) {
      //   //   text = text
      //   //     .replace("{{date}}", this.todayDate)
      //   //     .replace("key", element[index].value);
      //   //   return text;
      //   // };

      //   // var elem;
      //   // for (elem in names) {
      //   //   text = text
      //   //     .replace("{{date}}", this.todayDate)
      //   //     .replace("{{key}}", this.names[elem].value);
      //   //   return text;
      //   // }

      //   // infos.map((eachInfo) => {
      //   //   var text = this.mail;
      //   //   text = text
      //   //     .replace("{{date}}", this.todayDate)
      //   //     .replace("{{key}}", this.eachInfo.key)
      //   //     .replace("{{name}}", this.eachInfo.value);
      //   //   return text;
      //   // });
      //   // if (this.infos.length >= 0) {
      //   //   var text = this.mail;

      //   //   text = text.replace("{{date}}", this.todayDate);
      //   //   var myKey = text.find("{{key}}");
      //   //   // .replace("{{key}}", info.value)
      //   //   // .replace(function(myKey){
      //   //   //   if ("{{key}}"==="name"){
      //   //   //   return "{{name}}";
      //   //   // }
      //   //   // else{
      //   //   //   return "{{address}}"
      //   //   // }}, this.infos.index.value);
      //   //   console.log(myKey);
      //   //   return text;
      //   // }

      //   // var text = this.mail;
      //   // text = text
      //   //   .replace("{{date}}", this.todayDate)
      //   //   .replace("{{key}}", this.infos.slice(-1)[0].value)
      //   //   .replace("{{key}}", this.infos.slice(-1)[0].value);
      //   // return text;

      //   // var text = this.mail;
      //   // text = text;
      //   // var key = "{{key}}"
      //   //   .replace("{{date}}", this.todayDate)
      //   //   // .replace("{{key}}", this.infos[0].key)
      //   //   .replace(ckeckKey(key), this.infos[0].key);
      //   // return text;
      // } catch {
      //   alert("something went wrong, please add all required items");
      // }
      // // document.getElementById("infoMail").innerHTML = 5 + 7;
      // return text;
    },
  },
};
</script>

<style></style>
