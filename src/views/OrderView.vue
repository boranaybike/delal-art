<template>
  <div class="order">
    <v-row>
      <v-col cols="6">
        <div class="container">
          <div class="title">Siparişleriniz için,</div>
          <div id="subtitle">
            <div>
              <v-icon color="#f77f53">mdi-email-outline</v-icon> mail adresim üzerinden benimle iletişime
              geçebilirsiniz:
            </div>
            <div>
              <v-icon color="#f77f53">mdi-instagram</v-icon> instagram adresim üzerinden benimle iletişime
              geçebilirsiniz: @delaleylem.art
            </div>
            <div><v-icon color="#f77f53">mdi-shopping</v-icon>shoppier hesabımdan sipariş verebilirsiniz:</div>
          </div>
        </div>
      </v-col>

      <v-col cols="6">
        <v-img contain src="@/assets/eyes0.jpg"> </v-img>
      </v-col>
    </v-row>
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
.container {
  width: 30%;
  z-index: 2;
  position: absolute;
  left: 30%;
  top: 20%;
  background-color: white;
}
.title {
  padding: 5%;
  font-size: 30px !important;
  color: #f55b22;
}
#subtitle > div {
  text-align: left;
  font-size: 20px;
  color: #f77f53;
  padding: 1% 0;
}
.order {
  padding: 15% 15% 5% 15%;
}
.col {
  padding: 1%;
}
</style>
