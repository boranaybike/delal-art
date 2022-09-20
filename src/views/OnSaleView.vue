<template>
  <div class="on-sale">
    <v-row>
      <v-col cols="12" sm="4">
        <a href="https://www.shopier.com/ShowProductNew/products.php?id=13409602">
          <v-img contain src="@/assets/s31.jpg"> </v-img
        ></a>
      </v-col>
      <v-col cols="12" sm="4">
        <v-img contain src="@/assets/s2.jpg"> </v-img>
      </v-col>
      <v-col cols="12" sm="4">
        <a href="https://www.shopier.com/ShowProductNew/products.php?id=13409520">
          <v-img contain src="@/assets/1.jpg"> </v-img
        ></a>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-img contain src="@/assets/s11.jpg"> </v-img>
      </v-col>
      <v-col cols="12" sm="4">
        <a href="https://www.shopier.com/ShowProductNew/products.php?id=13409380">
          <v-img contain src="@/assets/s41.jpg"> </v-img
        ></a>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss" scoped>
.on-sale {
  padding: 10% 20% 5% 20%;
}
.col {
  padding: 1%;
}
.v-img.on-hover {
  background-color: rgba(#fff, 0.8);
}
@media screen and (max-width: 800px) {
  .on-sale {
    padding: 30% 20% 5% 20%;
  }
}
</style>
