<template>
  <div class="portfolio">
    <v-row>
      <v-col cols="12" sm="4">
        <v-img contain src="@/assets/2.jpg"> </v-img>
      </v-col>
      <v-col cols="12" sm="4">
        <v-img contain src="@/assets/3.jpg"> </v-img>
      </v-col>
      <v-col cols="12" sm="4">
        <v-img contain src="@/assets/4.jpg"> </v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" sm="4">
        <v-img contain src="@/assets/5.jpg"> </v-img>
      </v-col>
      <v-col cols="12" sm="4">
        <v-img contain src="@/assets/6.jpg"> </v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "Portfolio",
  components: {},
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.portfolio {
  padding: 10% 20% 5% 20%;
}
.col {
  padding: 1%;
}
@media screen and (max-width: 800px) {
  .portfolio {
    padding: 30% 20% 5% 20%;
  }
}
</style>
