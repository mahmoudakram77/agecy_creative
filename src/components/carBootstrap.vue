<template>
  <div
    id="carouselExampleDark"
    class="carousel carousel-dark slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active" data-bs-interval="10000">
        <div><img src="@/assets/555.png" alt="" /></div>

        <h5 class="mb-5 dark:text-white">
          <i class="fa-solid fa-quote-left"></i>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
          modi? Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Delectus, modi?
        </h5>
      </div>

      <div class="carousel-item" data-bs-interval="2000">
        <div><img src="@/assets/555.png" alt="" /></div>

        <h5 class="mb-5 dark:text-white">
          <i class="fa-solid fa-quote-left"></i>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
          ipisicing elit. Delectus, modi?
        </h5>
      </div>

      <div class="carousel-item">
        <div><img src="@/assets/555.png" alt="" /></div>

        <h5 class="mb-5 dark:text-white">
          <i class="fa-solid fa-quote-left"></i>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus,
          modi?Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Delectus, modi?
        </h5>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.startCarouselAutoplay();
  },
  methods: {
    startCarouselAutoplay() {
      // eslint-disable-next-line
      jQuery(".carousel").carousel({
        interval: 2000, // تغيير هنا حسب الحاجة
      });
    },
  },
};
</script>

<style scoped>
h5,
p {
  color: black;
}
.carousel {
  margin-top: 0px;
}
h5 {
  position: relative;
  top: 0px;
  font-size: 30px;
}
img {
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.carousel-dark .carousel-indicators [data-bs-target] {
  background-color: #fc0202;
}
.carousel-control-next-icon span {
  fill: red;
  background: rebeccapurple;
  color: red;
}
.carousel-control-next,
.carousel-control-prev {
  background: red;
  display: inline-block;
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  transform: translate(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
}
</style>
