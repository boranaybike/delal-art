<template>
  <div class="portfolio">
    <v-row>
      <v-col class="d-flex child-flex" cols="4">
        <v-img contain src="@/assets/1.jpg"> </v-img>
      </v-col>
      <v-col class="d-flex child-flex" cols="4">
        <v-img contain src="@/assets/2.jpg"> </v-img>
      </v-col>
      <v-col class="d-flex child-flex" cols="4">
        <v-img contain src="@/assets/3.jpg"> </v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex child-flex" cols="4">
        <v-img contain src="@/assets/4.jpg"> </v-img>
      </v-col>
      <v-col class="d-flex child-flex" cols="4">
        <v-img contain src="@/assets/5.jpg"> </v-img>
      </v-col>
      <v-col class="d-flex child-flex" cols="4">
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
</style>
