<template>
  <div class="ddd" v-if="true">
    <Carousel ref="carousel" v-bind="settings">
      <Slide v-for="item in images" :key="item.id">
        <div class="carousel__item mt-4">
          <!-- <img :src="item.url" alt="Carousel Item" /> -->
          <div class="cardd mt-5 mb-4">
            <div class="card-body text-start mx-3">
              <div class="card-img">
                <img :src="item.url" alt="" />
                <div class="card-text">
                  <h3 class="">{{ item.name }}</h3>
                  <h5>{{ item.job }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slide>
      <span></span><span></span>

      <template #addons>
        <div class="one">
          <Navigation class="custom-navigation carousel__icon" />
        </div>

        <Pagination class="custom-pagination mt-4" />
      </template>
    </Carousel>
  </div>

  <!-- :autoplay="2000"
      :itemsToShow="2.5"
      :wrapAround="true" -->
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide, Pagination } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
  mounted() {
    this.$nextTick(() => {
      const navigationButtons =
        this.$refs.carousel.$el.getElementsByClassName("custom-navigation");
      Array.from(navigationButtons).forEach((button) => {
        button.style.width = "70px";
        button.style.height = "70px";
        button.style.color = "red";
      });

      const iconElements = this.$refs.carousel.$el.getElementsByTagName("svg");
      Array.from(iconElements).forEach((icon) => {
        icon.style.width = "70px";
        icon.style.height = "70px";
      });
      const paginationButtons = this.$refs.carousel.$el.getElementsByClassName(
        "carousel__pagination-button"
      );
      Array.from(paginationButtons).forEach((button) => {
        button.style.background = "white";
        button.style.fill = "red";
        button.style.borderRadius = "100%";
      });
    });
  },
  data() {
    return {
      images: [
        {
          id: 1,
          url: require("@/assets/35.png"),
          name: "name",
          job: "Ceo",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quis.",
        },
        {
          id: 2,
          url: require("@/assets/36.png"),
          name: "name",
          job: "web developer",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quis.",
        },
        {
          id: 2,
          url: require("@/assets/35.png"),
          name: "name",
          job: "web design",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quis.",
        },
        {
          id: 2,
          url: require("@/assets/36.png"),
          name: "name",
          job: "engineer",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quis.",
        },
        {
          id: 2,
          url: require("@/assets/35.png"),
          name: "name",
          job: "programming",
          desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, quis.",
        },
      ],
      settings: {
        itemToShow: 1,
        snapAlign: "center",
        autoplay: 2000,
        wrapAround: true,
        transition: 500,
        breakpoints: {
          700: {
            itemsToShow: 2,
            snapAlign: "center",
          },
          1024: {
            itemsToShow: 3,
            snapAlign: "center",
          },
        },
      },
    };
  },
});
</script>

<style lang="scss" scoped>
* {
  z-index: 4;
}

.ddd {
  margin: 0 auto;
}

.carousel__icon {
  width: 100px;
  height: 100px;
}

.ddd {
  margin: 0 auto;
}
.card-img img {
  width: 450px;
  z-index: 4;
}
.card-text {
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  background-color: red;
}

.card-text {
  display: flex;
  flex-direction: column;
}
.card-text h3 {
  background: rgb(50, 50, 50);
  display: inline-block;
  padding: 5px 50px;
  border-radius: 0 10px 0 10px;
  font-size: 30px;
  text-transform: uppercase;
  color: white;

  margin-bottom: 5px;
}
.card-text h5 {
  background: rgb(255, 0, 0);
  display: inline-block;
  padding: 5px 20px;
  border-radius: 0 10px 0 10px;
  font-size: 15px;
  text-transform: uppercase;
  color: white;
}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.2);
}
.custom-navigation {
  margin-top: 200px;
  background: blue;
}
</style>
