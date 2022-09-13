<template>
  <div class="home-card">
    <v-row no-gutters>
      <v-col>
        <v-col> <div class="head">delaleylem.art</div></v-col>
        <v-col><img width="350" src="@/assets/40.jpg" /></v-col>

        <div id="container">
          <div id="flip">
            <div><div>Portre</div></div>
            <div><div>diş mekan</div></div>
            <div><div>Figür</div></div>
          </div>
          Resimleri
        </div></v-col
      >
    </v-row>
    <v-row>
      <v-col>
        <section class="container">
          <h1>
            <span class="title">satistaki</span>
            <span class="title">tablolar</span>
          </h1>
        </section></v-col
      >
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mounted() {},
  methods: {},
});
</script>

<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Fjalla+One);

@import url("https://fonts.googleapis.com/css2?family=Abel&family=Qwitcher+Grypen&display=swap");

$background: linear-gradient(to bottom, #405166 0%, #656f6f 100%);
$red: #e99a95;
$green: #8dc388;
$yellow: #f1c83c;
$shadow: #ebdfb9;

.home-card {
  padding: 5vh 5vw;
  text-align: -webkit-center;
  align-items: center;
  margin: auto;
}

.container {
  max-width: 200px;
}

h1 {
  span {
    transform: skew(-10deg);
    display: block;
    text-shadow: $shadow 1px 1px, $shadow 2px 2px, $shadow 3px 3px, $shadow 4px 4px;
  }
  color: #fff;
  text-transform: uppercase;
  font-size: 42px;
  margin: 0;
  line-height: 47px;
  letter-spacing: 2px;
}

.title {
  transform: translateX(-50%) rotate(-10deg);
  display: block;
  left: 50%;
  position: relative;

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

@import url("https://fonts.googleapis.com/css?family=Roboto:700");

.head {
  font-family: "Qwitcher Grypen", cursive;
  font-size: 100px;
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
  background: #e99a95;
}
#flip div:first-child div {
  background: #8dc388;
}
#flip div:last-child div {
  background: #ebdfb9;
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
