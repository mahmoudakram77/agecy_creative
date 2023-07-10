<template>
  <div class="bgg position-relative">
    <img class="img-fluid img-img" src="@/assets/3.png" alt="" />
  </div>
  <div class="container">
    <div class="row mx-auto text-center">
      <div class="col-xxl-6 col-lg-6 col-md-6 col-sm-12 one">
        <h1 class="display-4">Who We Are</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rer
        </p>
        <button
          type="button"
          data-te-ripple-init
          data-te-ripple-color="light"
          class="but mt-3"
        >
          <h3>read more</h3>
        </button>
      </div>
      <div class="col-xxl-6 col-lg-6 col-md-6 col-sm-12 coco">
        <div class="i">
          <img class="image2" src="@/assets/2.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bg img {
  position: absolute;
  z-index: 0;
  right: 0;
}
.container {
  height: 100vh;
}

.imgg {
  position: absolute;
  right: 0;
  z-index: 1;
}
.row .coco {
  z-index: 0;
}
h1 {
  font-size: 60px;
  margin-bottom: 20px;
}
h1,
p {
  font-weight: 900;
  text-shadow: 0 0 2px white;
}
p {
  font-size: 30px;
}
.col-xxl-6 {
  margin-top: 200px;
  z-index: 0;
}

.row {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 768px) {
  .container {
    text-align: center;
    margin: 0 auto;
  }
  .image2 {
    margin-top: -100px;
  }

  .coco {
    .i {
      width: 390px !important;

      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .container {
    height: 100vh;
  }
  .one {
    h1 {
      font-size: 40px;
    }
    p {
      font-size: 20px;
    }
  }
}
.but {
  background: #bc2d3d;
  color: white;
  font-size: 25px;
  border-radius: 30px;
  padding: 10px 20px;
  transition: 1s ease;
  box-shadow: 0 0 3px #bc2d3d;

  &:hover {
    background: #81000f;
  }
  h3 {
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
  }
}
.img-img {
  position: absolute;
  right: 0;
  top: 0;
}
</style>
