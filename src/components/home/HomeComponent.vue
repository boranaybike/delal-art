<template>
  <div class="home-card">
    <v-row>
      <v-col> <div class="head">delaleylem.art</div></v-col>
      <v-col>
        <a href="https://www.instagram.com/delaleylem.art/"> <v-icon color="#F55B22">mdi-instagram</v-icon></a>
      </v-col></v-row
    >
    <div class="carousel">
      <v-carousel cycle height="200" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item src="@/assets/s11.jpg"> </v-carousel-item>
      </v-carousel>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  props: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {},
});
</script>

<style lang="scss" scoped>
.col {
  padding: 5% 20% 1% 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.carousel {
  padding: 0 20% 5% 20%;
}
.head {
  font-family: "Qwitcher Grypen", cursive;
  font-size: 80px;
}
</style>
