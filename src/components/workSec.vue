<template>
  <div class="bg dark:bg-black position-relative bg-gray-400">
    <div class="container d-flex justify-content-center align-items-center">
      <div class="row d-flex">
        <div class="col-lg-5 align-items-center mm d-flex flex-col">
          <h1 class="display-3 h11 mb-5">how we work</h1>
          <p class="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dolorum
            labore, tenetur aut repellendus tempore esse itaque quidem? Culpa,
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
        <div class="col-lg-7 col-sm-12 col-xs-12 align-items-center mm mt-5">
          <carWork class="hel" />
        </div>
      </div>
      <div id="ii">
        <div class="rit">
          <img src="@/assets/33.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carWork from "@/components/carWork.vue";
export default {
  components: {
    carWork,
  },
};
</script>

<style lang="scss" scoped>
.ii {
  position: relative;
}
.rit img {
  position: absolute;
  left: 0;
  z-index: 0;
  top: 100%;
}

.container {
  height: 100vh;

  .mm {
    z-index: 2;
  }
}
img {
  position: absolute;
  right: 0;
}

@media screen and (max-width: 768px) {
  .container {
    text-align: center;
    // margin-top: -150px;
  }
  .bg {
    height: 100%;
  }
  .hel {
  }
  .hel {
    width: 400px;
  }
}
@media screen and (max-width: 423px) {
  p {
    width: 300px;
  }
  .hel {
    width: 350px;
  }
}

.h11 {
  font-weight: 700;
  text-transform: capitalize;
}
.but {
  background: #bc2d3d;
  color: white;
  font-size: 25px;
  border-radius: 30px;
  padding: 10px 20px;
  transition: 1s ease;
  box-shadow: 0 0 3px #ffffff;

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
.h11,
p,
button {
}
p {
  text-shadow: 0 0 10px white;
}
</style>
