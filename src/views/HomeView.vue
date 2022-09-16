<template>
  <div>
    <Home> <Card /></Home>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Home from "@/components/home/HomeComponent.vue";
import Card from "@/components/shared/CardComponent.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    Home,
    Card,
  },
});
</script>
