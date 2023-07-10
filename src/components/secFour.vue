<template>
  <div class="container">
    <h1 class="pt-5 text-center display-3">What client says</h1>
    <car-bootstrap></car-bootstrap>
  </div>
</template>

<script>
import CarBootstrap from "./carBootstrap.vue";
export default {
  components: {
    CarBootstrap,
  },
};
</script>

<style lang="scss">
.container {
  height: 100%;
  z-index: 5;
  h1 {
    font-weight: 500;
  }
}
</style>
