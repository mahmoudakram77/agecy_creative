<template>
  <section id="home">
    <div class="container">
      <div class="row mx-auto text-center">
        <div class="col-lg-6 col-md-6 col-sm-12 mb-4">
          <div class="h11">
            <div><h1 class="border-text">Think</h1></div>
            <div><h1>outside</h1></div>
            <div>
              <h1>of <span>t</span>he <span>b</span>ox</h1>
            </div>
            <div class="b mt-3">
              <button class="btnn">
                <h2 style="color: black">read more</h2>
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 im mb-4 im">
          <img class="" src="@/assets/1.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.i {
  position: absolute;
  right: 0;
  top: 0; /* Optional: Adjust the top position if needed */
}
@import url("https://fonts.googleapis.com/css2?family=Caprasimo&family=Roboto:wght@500;700;900&family=Russo+One&display=swap");
.h11 h1 {
  font-family: "Caprasimo", cursive;
  font-family: "Roboto", sans-serif;
  font-family: "Russo One", sans-serif;
  text-transform: uppercase;
  color: white;
  font-size: 80px;
}
.h11 {
}

.h11 h1 {
  text-shadow: 0 0 10px black;
}
h1::first-letter {
  color: red;
}
span {
  color: red;
}
.h11 h1 {
  animation: coloringg 1s infinite alternate-reverse;
}

.b {
  position: relative;
  &:hover {
  }
}
.btnn {
  background: white;
  border-radius: 50px;
  width: 200px;
  font-size: 30px;
  padding: 10px 15px;
  height: 55px;
  position: relative;
  h2 {
    text-transform: uppercase;
    &:first-letter {
      color: white;
    }
  }
}
.btnn::after {
  content: "";
  position: absolute;
  top: 0;
  left: -1px;
  border-radius: 50px;
  display: block;
  width: 55px;
  height: 55px;
  background-color: #bc2d3d;
  transition: width 0.5s ease;
  z-index: 2;
}
.btnn h2 {
  position: relative; /* إضافة position: relative للعنصر النصي */
  z-index: 3;
  color: rgb(130, 129, 129);
  font-weight: 600;
}

.btnn:hover::after {
  width: 202px;
}
@media screen and (max-width: 768px) {
  .h11 h1 {
    font-size: 50px;
  }
  .row {
    margin-top: 100px;
  }
  .im {
  }
  button {
  }
}

.h11 h1 {
  color: transparent;
  text-shadow: 0 0 1px white;
}
.row {
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  margin-top: 60px;
}
</style>
