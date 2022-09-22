<template>
  <div class="cards">
    <v-row>
      <v-col>
        <v-hover
          ><router-link to="/on-sale">
            <v-card class="mx-auto">
              <v-img src="@/assets/1.jpg"></v-img>

              <v-card-title>
                <div class="head">Satıştaki Tablolar</div>
              </v-card-title>
            </v-card></router-link
          ></v-hover
        ></v-col
      >
      <v-col>
        <v-hover
          ><router-link to="/portfolio">
            <v-card class="mx-auto">
              <v-img src="@/assets/4.jpg"></v-img>
              <v-card-title>
                <div class="head">Portfolyo</div>
              </v-card-title>
            </v-card></router-link
          ></v-hover
        ></v-col
      >
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "CardComponent",
  props: {},
  data() {
    return { show: false };
  },
  mounted() {},
  methods: {},
});
</script>

<style scoped lang="scss">
@import url(https://fonts.googleapis.com/css?family=Fjalla+One);
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Qwitcher+Grypen&display=swap");
.v-image {
  height: 200px;
}
.mx-auto {
  width: 350px;
}

a {
  text-decoration: none;
}
.col {
  display: flex;
  align-items: center;
  justify-content: center;
}
.cards {
  padding: 0 20% 5% 20%;
  text-align: -webkit-center;
  align-items: center;
  margin: auto;
}
.head {
  font-family: "Qwitcher Grypen", cursive;
  font-size: 40px;
}
</style>
