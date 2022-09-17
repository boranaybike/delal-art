<template>
  <div class="order">
    <div class="container">
      <div class="title">Siparisleriniz için,</div>
      <div id="subtitle">
        <div>
          <v-icon color="#f77f53">mdi-email-outline</v-icon> mail adresim üzerinden benimle iletisime geçebilirsiniz:
        </div>
        <div>
          <v-icon color="#f77f53">mdi-instagram</v-icon> instagram adresim üzerinden benimle iletisime geçebilirsiniz:
          @delaleylem.art
        </div>
        <div><v-icon color="#f77f53">mdi-shopping</v-icon>shoppier hesabımdan siparis verebilirsiniz:</div>
      </div>
    </div>
    <v-img contain style="width: 60%; left: 45%" src="@/assets/eyes0.jpg"> </v-img>
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
.container {
  width: 40%;
  z-index: 2;
  position: absolute;
  left: 20%;
  top: 20%;
  padding: 3%;
  background-color: #f6f5f5;
}
.title {
  font-family: "Abel", sans-serif !important;

  padding: 5%;
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
</style>
