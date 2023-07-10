<template>
  <div class="overlay">
    <div class="bg dark:bg-black">
      <div class="container dark:text-white">
        <h1 class="text-center display-2 pt-5">Get In Touch</h1>
        <div class="row mt-5 pt-5 text-center">
          <div class="col-lg-4 col-sm-12">
            <div class="im mb-5"><i class="fa-solid fa-envelope"></i></div>
            <div class="content mx-2">
              <h1 class="text-start">Email</h1>
              <p>mahmodeljaru@gmail.com</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="im mb-5"><i class="fa-solid fa-phone"></i></div>
            <div class="content mx-2">
              <h1 class="text-start">phone</h1>
              <p>+999999999999999999999</p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div class="im mb-5">
              <i class="fa-sharp fa-solid fa-map-location-dot"></i>
            </div>
            <div class="content mx-2">
              <h1 class="text-start">location</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <h1 class="display-2">Follow Us</h1>
          <div class="soial">
            <ul class="d-flex justify-center">
              <li>
                <a href=""
                  ><i class="fa-brands fa-facebook text-blue-600"></i
                ></a>
              </li>
              <li>
                <a href=""
                  ><i class="fa-brands fa-twitter text-blue-300"></i
                ></a>
              </li>
              <li>
                <a href=""><i class="fa-brands fa-youtube text-red-600"></i></a>
              </li>
              <li>
                <a href=""
                  ><i class="fa-brands fa-linkedin text-blue-950"></i
                ></a>
              </li>
            </ul>
          </div>
          <h1>design by mahmod eljaru</h1>
          <h1>mahmoudeljaru@gmail.com</h1>
          <button>
            <a
              class="btn btn-primary mt-3"
              href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQbBVjlvpXxMlkGdqtpGJMGPKtwwrVfxHJwqgJMrLvwHmxCZGTzLCJbQsKGWKRqRRRPHXq"
              target="_black"
              >Click Here To Contact Me</a
            >
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.overlay {
  background-image: url(@/assets/f2.png);
  height: 640px;
  z-index: 0;
}
.bg {
  background-color: rgba(255, 0, 0, 0.399);
  z-index: -1;
  height: 640px;
  width: 100%;
  opacity: 1;
}
.footimg {
  z-index: 0;
}
.container {
  color: black;
  z-index: 5;
}
.row {
  z-index: 5;
}
.col-lg-4 {
  display: flex;

  font-size: 30px;

  justify-content: center;
}
i {
  font-size: 80px;
}
.content {
}
p {
  font-size: 15px;
}

.footimg {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 0;
}
@media screen and (max-width: 992px) {
  .bg {
    height: 100%;
  }
  .overlay {
    height: 100%;
  }
}
</style>
