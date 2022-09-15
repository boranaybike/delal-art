<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "./FooterComponent.vue";
import Header from "./HeaderComponent.vue";

export default Vue.extend({
  name: "Layout",
  components: {
    Footer,
    Header,
  },
});
</script>
