<template>
  <div class="order">
    <div class="container">
      <div class="title">Siparisleriniz için,</div>
      <div id="subtitle">
        <div>
          <v-icon color="#f77f53">mdi-email-outline</v-icon> mail adresim üzerinden benimle iletisime geçebilirsiniz:
          eylmuyank@gmail.com
        </div>
        <div>
          <v-icon color="#f77f53">mdi-instagram</v-icon> instagram adresim üzerinden benimle iletisime geçebilirsiniz:
          @delaleylem.art
        </div>
      </div>
    </div>
    <v-img class="image" contain src="@/assets/eyes3.jpg"> </v-img>

    <div class="container2">
      <div id="subtitle">
        <div>
          Tablolarda genellikle kullandıgım ve resimler için uygun gördügüm ölçüler verilmistir. Tablodakiler dısında
          farklı bir sekil ve ölçüde siparis vermek, pres tuval fiyatları hakkında bilgi almak ya da öneri almak
          isterseniz lütfen benimle iletisime geçiniz.
        </div>
      </div>
    </div>
    <div class="cost">
      <v-row>
        <v-col cols="12" sm="6">
          <v-img contain style="width: 100%" src="@/assets/yagli-boya0.png"> </v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img contain style="width: 100%" src="@/assets/yagli-boya1.png"> </v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6">
          <v-img contain style="width: 100%" src="@/assets/akrilik0.png"> </v-img>
        </v-col>
        <v-col cols="12" sm="6">
          <v-img contain style="width: 100%" src="@/assets/akrilik1.png"> </v-img>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "OrderView",
  components: {},
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Cormorant+Garamond:ital,wght@1,300&family=Qwitcher+Grypen&display=swap");
.image {
  width: 60%;
  left: 45%;
}
.container {
  width: 40%;
  z-index: 2;
  position: absolute;
  left: 15%;
  top: 10%;
  padding: 3%;
  background-color: #f6f5f5;
}
.container2 {
  width: 80%;
  padding: 2%;
  background-color: #f6f5f5;
}
.container2 #subtitle > div {
  font-size: 20px;
  text-align: center;
}

.title {
  font-family: "Abel", sans-serif !important;
  padding: 0 0 2% 0;
  font-size: 30px !important;
  color: #f55b22;
}
#subtitle > div {
  text-align: left;
  font-size: 20px;
  color: burlywood;
  padding: 1% 0;
}
.order {
  font-family: "Abel", sans-serif;
  padding: 10% 15% 5% 15%;
}
.col {
  padding: 1%;
}
.row {
  padding: 5%;
}

@media screen and (max-width: 1000px) {
  .container {
    width: 50%;
    top: 10vh;
  }

  .order {
    padding: 15vh 10vw 5vh 10vw;
  }
}
@media screen and (max-width: 400px) {
  .image {
    width: 100%;
    left: 0;
  }
  .container {
    width: 100%;
    top: 0;
    left: 0;
    position: relative;
  }
  .container2 {
    width: 100%;

    margin: auto;
    z-index: 2;
  }
  .order {
    padding: 15vh 10vw 5vh 10vw;
  }
}
</style>
