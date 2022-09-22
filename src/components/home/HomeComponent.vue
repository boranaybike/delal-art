<template>
  <div class="home-card">
    <div class="head">delaleylem.art</div>
    <div class="carousel">
      <v-carousel cycle height="200" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item src="@/assets/s11.jpg"> </v-carousel-item>
        <v-carousel-item src="@/assets/eyes2.jpg"> </v-carousel-item>
      </v-carousel>
    </div>
    <slot />
    <div class="order">
      <router-link to="/order">
        <v-img class="order-image" src="@/assets/order.png" />
      </router-link>
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
.order {
  justify-content: center;
  align-items: center;
  display: flex;
}
.carousel {
  padding: 0 20% 3% 20%;
}
.head {
  font-family: "Qwitcher Grypen", cursive;
  font-size: 80px;
  padding: 5% 20% 1% 20%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.order-image {
  width: 55vw;
}
@media screen and (max-width: 800px) {
  .head {
    padding: 15% 20% 1% 20%;
  }
  .carousel {
    padding: 0 1% 3% 1%;
  }

  .order-image {
    width: 100vw;
  }
}
</style>
