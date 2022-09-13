<template>
  <div>
    <HomeCard />
    <Card />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HomeCard from "@/components/home/HomeCardComponent.vue";
import Card from "@/components/shared/CardComponent.vue";

export default Vue.extend({
  name: "HomeView",
  components: {
    HomeCard,
    Card,
  },
});
</script>
