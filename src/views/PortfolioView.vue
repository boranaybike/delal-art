<template>
  <div class="portfolio">
    <v-row>
      <v-col class="d-flex child-flex" cols="4">
        <v-img src="@/assets/1.jpg"> </v-img>
      </v-col>
      <v-col class="d-flex child-flex" cols="4">
        <v-img src="@/assets/2.jpg"> </v-img>
      </v-col>
      <v-col class="d-flex child-flex" cols="4">
        <v-img src="@/assets/3.jpg"> </v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex child-flex" cols="4">
        <v-img src="@/assets/4.jpg"> </v-img>
      </v-col>
      <v-col class="d-flex child-flex" cols="4">
        <v-img src="@/assets/5.jpg"> </v-img>
      </v-col>
      <v-col class="d-flex child-flex" cols="4">
        <v-img src="@/assets/6.jpg"> </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss">
.portfolio {
  padding: 5% 20% 1% 20%;
}
.col {
  padding: 1%;
}
</style>
