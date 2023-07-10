<template>
  <div class="bg dark:bg-black bg-slate-200">
    <div class="container-fluid d-flex flex-column align-items-center">
      <h1 class="text-center display-3 capitalize pt-5 dark:text-white">
        our creative team
      </h1>
      <car-three class="mt-5"></car-three>
    </div>
  </div>
  <div>
    <img class="img-fluid im1" src="@/assets/55.png" alt="" />
  </div>
</template>

<script>
import carThree from "./carThree.vue";
export default {
  components: { carThree },
};
</script>

<style scoped>
.container-fluid {
  position: relative;
  z-index: 1;
  height: 100%;
}

h1 {
  color: rgb(0, 0, 0);
  font-weight: 900;
  text-shadow: 0 0 5px white;
  top: -50px; /* تعديل القيمة حسب المسافة التي ترغب في رفع العنصر */
}

.o {
}
.im1 {
  position: absolute;
  width: 350px;

  z-index: 0;
}
</style>
