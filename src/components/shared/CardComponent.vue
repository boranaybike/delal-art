<template>
  <div class="cards">
    <v-row>
      <v-col>
        <v-hover
          ><router-link to="/on-sale">
            <v-card class="mx-auto">
              <v-img src="@/assets/1.jpg"></v-img>

              <v-card-title>
                <div class="head">satıştaki tablolar</div>
              </v-card-title>
            </v-card></router-link
          ></v-hover
        ></v-col
      >
      <v-col>
        <div id="container">
          <div id="flip">
            <div><div>Portre</div></div>
            <div><div>diş mekan</div></div>
            <div><div>Figür</div></div>
          </div>
          Resimleri
        </div></v-col
      >
      <v-col>
        <v-hover
          ><router-link to="/portfolio">
            <v-card class="mx-auto">
              <v-img src="@/assets/2.jpg"></v-img>

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
@import url("https://fonts.googleapis.com/css?family=Roboto:700");

$background: linear-gradient(to bottom, #405166 0%, #656f6f 100%);
$red: #f55b22;
$green: #8dc388;
$yellow: #dbf522;
$shadow: #ebdfb9;

.mx-auto {
  width: 250px;
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

h1 {
  span {
    transform: skew(-10deg);
    display: block;
    text-shadow: $shadow 1px 1px, $shadow 2px 2px, $shadow 3px 3px, $shadow 4px 4px;
  }
  color: #fff;
  text-transform: uppercase;
}

.title {
  transform: translateX(-50%) rotate(-10deg);
  display: block;
  left: 50%;
  position: relative;
  font-size: 50px !important;

  span {
    transform: skew(-10deg);
    display: block;
    float: left;
    text-shadow: $shadow 1px 1px, $shadow 2px 2px, $shadow 3px 3px, $shadow 4px 4px, $shadow 5px 5px, $shadow 6px 6px;
    min-width: 10px;
    min-height: 10px;
    position: relative;
  }
}

.title {
  &:nth-child(1) {
    color: $red;
  }
  &:nth-child(2) {
    color: $green;
  }
  &:nth-child(3) {
    color: $yellow;
  }
}
.collumn {
  padding: 10% 0 5%;
  justify-content: center;
}

.head {
  font-family: "Qwitcher Grypen", cursive;
  font-size: 40px;
}
body {
  margin: 0px;
  text-align: center;
  font-family: "Abel", sans-serif;
}

#container {
  color: #999;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: bold;
}

#flip {
  height: 50px;
  overflow: hidden;
}

#flip > div > div {
  color: #fff;
  padding: 4px 12px;
  height: 45px;
  margin-bottom: 45px;
  display: inline-block;
}

#flip div:first-child {
  animation: show 5s linear infinite;
}

#flip div div {
  background: #f55b22;
}
#flip div:first-child div {
  background: #f77f53;
}
#flip div:last-child div {
  background: #f5c722;
}

@keyframes show {
  0% {
    margin-top: -270px;
  }
  5% {
    margin-top: -180px;
  }
  33% {
    margin-top: -180px;
  }
  38% {
    margin-top: -90px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}
</style>
