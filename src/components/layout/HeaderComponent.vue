<template>
  <div>
    <v-app-bar style="color: white; height: 60px !important; z-index: 3" color="#8C453F" dense dark>
      <v-toolbar-title style="font-family: 'Qwitcher Grypen', cursive; font-size: 40px"
        ><router-link to="/">delaleylem.art</router-link></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <a href="https://www.instagram.com/delaleylem.art/">
        <v-icon>mdi-instagram</v-icon>
      </a>
      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item>
            <router-link to="/portfolio">
              <v-list-item-title style="text-decoration: none; color: black">Portfolyo</v-list-item-title></router-link
            >
          </v-list-item>

          <v-list-item>
            <router-link to="/on-sale">
              <v-list-item-title style="text-decoration: none; color: black"
                >Satıştakiler</v-list-item-title
              ></router-link
            >
          </v-list-item>

          <v-list-item>
            <router-link to="/order">
              <v-list-item-title style="text-decoration: none; color: black">Sipariş</v-list-item-title></router-link
            >
          </v-list-item>
        </v-list>
      </v-menu>
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
