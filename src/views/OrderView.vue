<template>
  <div class="order">
    <div class="title">Sipariş için:</div>
    <div id="subtitle">
      <div><div>mail adresim üzerinden benimle iletişime geçebilirsiniz</div></div>
      <div><div>instagram adresim üzerinden benimle iletişime geçebilirsiniz</div></div>
      <div><div>shoppier hesabımdan sipariş verebilirsiniz</div></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "OrderView",
  components: {},
  data() {
    return {};
  },
  methods: {},
});
</script>

<style lang="scss" scoped>
.title {
  padding: 5%;
  font-size: 50px !important;
  color: #f5c722;
}
#subtitle > div > div {
  text-align: left;
  font-size: 30px;
  color: #f77f53;
}
.order {
  padding: 10% 20% 5% 20%;
}
.col {
  padding: 1%;
}
</style>
