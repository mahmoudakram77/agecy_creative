<template>
  <Splide class="sp" :options="options" aria-label="My Favorite Images">
    <SplideSlide class="main" v-for="img in images" :key="img.id">
      <div class="con">
        <img class="imgg" :src="img.path" alt="Sample 1" />
        <h1 class="text">{{ img.text }}</h1>
      </div>
    </SplideSlide>
  </Splide>
</template>

<script>
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import "@splidejs/vue-splide/css";
// or other themes
// or only core styles
import "@splidejs/vue-splide/css/core";

export default {
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      images: [
        { id: 1, path: require("@/assets/work1.png"), text: "lorem lorem" },
        { id: 2, path: require("@/assets/work2.png"), text: "lorem lorem" },
        { id: 3, path: require("@/assets/work2.png"), text: "lorem lorem" },
        { id: 3, path: require("@/assets/work1.png"), text: "lorem lorem" },
        { id: 3, path: require("@/assets/work2.png"), text: "lorem lorem" },
      ],
      options: {
        drag: "free",
        pagination: false,
        arrows: true,
        perMove: 1,
        type: "loop",
        autoplay: true,
        interval: 3000,
        perPage: 2.5,
        breakpoints: {
          1400: {
            perPage: 2,
          },
          768: {
            perPage: 1,
          },
          640: {},
        },
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      const arrowElements = document.querySelectorAll(".splide__arrow");
      arrowElements.forEach((arrow) => {
        arrow.style.backgroundColor = "red";
        arrow.style.color = "red";

        // Set the desired color
      });
    });
  },
};
</script>

<style scoped>
.sp {
  z-index: 0;
  overflow-x: hidden;
  max-width: 100%;
}

.text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 800;
  color: white;
  font-size: 20px;
}
</style>
