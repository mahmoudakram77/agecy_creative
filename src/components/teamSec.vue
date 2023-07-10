<template>
  <div class="bg-slate-200 background dark:bg-black dark:text-white bg">
    <div
      class="container-fluid d-flex flex-col justify-content-center align-items-center position-relative p-5"
    >
      <div class="rel">
        <img class="ret" src="@/assets/Rectangle5.png" alt="" />
      </div>

      <h1 class="text-center pt-5 display-2 mb-5">what we do</h1>
      <div class="row d-flex justify-content-center">
        <div
          class="col-xxl-4 col-lg-4 col-md-6 col-sm-12 g-3 zz"
          v-for="content in contents"
          :key="content.id"
        >
          <div class="con d-flex align-items-center justify-content-center">
            <div class="circle">
              <div class="image">
                <img :src="content.path" alt="" />
              </div>
            </div>
            <div class="con2 mt-5 pt-4">
              <h1 class="mx-2 display-6 text-gray-500 dark:text-white">
                {{ content.title }}
              </h1>
              <p class="mx-2">{{ content.para }}</p>
            </div>
          </div>
          <!-- <p class="px-2">{{ content.para }}</p> -->
        </div>
      </div>
    </div>
    <img
      style="z-index: 1"
      class="img-fluid imagee"
      src="@/assets/r2.png"
      alt=""
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        {
          id: 1,
          path: require("@/assets/i.png"),
          title: "lorem lorem",
          para: "  Lorem ipsum dolor sit amet,  Dolor iste ullam vitaeLorem ipsum dolor sit amet, Dolor iste ullam vitae ",
        },
        {
          id: 2,
          path: require("@/assets/i1.png"),
          title: "lorem lorem",
          para: "  Lorem ipsum dolor sit amet,  Dolor iste ullam vitaeLorem ipsum dolor sit amet, Dolor iste ullam vitae ",
        },
        {
          id: 3,
          path: require("@/assets/i2.png"),
          title: "lorem lorem",
          para: "  Lorem ipsum dolor sit amet,  Dolor iste ullam vitaeLorem ipsum dolor sit amet, Dolor iste ullam vitae ",
        },
        {
          id: 4,
          path: require("@/assets/i3.png"),
          title: "lorem lorem",
          para: "  Lorem ipsum dolor sit amet,  Dolor iste ullam vitaeLorem ipsum dolor sit amet, Dolor iste ullam vitae ",
        },
        {
          id: 5,
          path: require("@/assets/i4.png"),
          title: "lorem lorem",
          para: "  Lorem ipsum dolor sit amet,  Dolor iste ullam vitaeLorem ipsum dolor sit amet, Dolor iste ullam vitae ",
        },
        {
          id: 6,
          path: require("@/assets/i.png"),
          title: "lorem lorem",
          para: "  Lorem ipsum dolor sit amet,  Dolor iste ullam vitaeLorem ipsum dolor sit amet, Dolor iste ullam vitae ",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-transform: capitalize;
  font-weight: 500;
}
.background {
  height: 100vh;
  margin-top: 20px;
  .container {
    h1 {
      font-weight: 500;
      text-transform: capitalize;
    }
  }
  .row {
    .circle {
      background-color: #bc2d3d;
      width: 80px;
      border-radius: 50%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }
  }
}

p {
  margin-left: 57px;
}

.ret {
  position: absolute;
  left: 0;
  top: 50%;
  z-index: 0;
}
.con {
  z-index: 0;
  transition: 0.4s ease-in-out;
  &:hover {
    filter: drop-shadow(0 0 20px rgb(250, 30, 30));
  }
}
.zz {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px;
}
p {
}
.rel2 img {
  position: absolute;
  right: 0;
}
@media screen and (max-width: 1048px) {
  .bg {
    height: 100%;
  }
}

@media screen and (max-width: 1400px) {
  .con {
    margin: 0 auto;
  }
  .bg {
    height: 100%;
  }
  p {
    margin: 0 auto;
  }
}
p {
  z-index: 1;
}
@media screen and (max-width: 768px) {
  .con {
    flex-direction: column;
    text-align: center;
  }
  .con2 {
    position: relative;
    top: -50px;
  }
  p {
    width: 300px;
    margin-top: 5px;
  }
  .row {
    .circle {
      background-color: #bc2d3d;
      width: 50px;
      border-radius: 50%;
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
    }
  }
}
.imagee {
  position: absolute;
  right: 0;

  z-index: 0;
  width: 500px;
}
@media screen and (max-width: 1400px) {
  .row,
  .con {
    display: flex;
    justify-content: center;
  }
}
</style>
