<template>
  <div>
    <v-app-bar style="color: white; height: 60px !important; z-index: 3" color="#E99A95" dense dark>
      <v-toolbar-title style="font-family: 'Qwitcher Grypen', cursive; font-size: 40px"
        ><router-link to="/">delaleylem.art</router-link></v-toolbar-title
      >
      <v-spacer />
      <a href="https://www.instagram.com/delaleylem.art/">
        <v-icon>mdi-instagram</v-icon>
      </a>
    </v-app-bar>
  </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Abel&family=Qwitcher+Grypen&display=swap");
a {
  text-decoration: none;
  color: white;
}
.v-application a {
  color: white !important;
}
.v-app-bar {
  position: fixed;
  padding: 0.5% 10%;
}
.title {
  font-family: "Qwitcher Grypen", cursive;
}
</style>
