<template>
  <v-app>
    <v-main>
      <Layout>
        <router-view />
      </Layout>
    </v-main>
  </v-app>
</template>
<script lang="ts">
import Layout from "@/components/layout/LayoutComponent.vue";
import Vue from "vue";

export default Vue.extend({
  name: "Vue",
  components: {
    Layout,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
