<template>
  <div class="bg dark:bg-black">
    <div class="circle"></div>
    <header>
      <div class="circle"></div>
      <nav
        :class="{ 'fixed-navbar': isNavbarFixed }"
        class="nav d-flex justify-content-between"
      >
        <div style="font-weight: 900; color: rgb(67, 0, 236)" class="logo desc">
          Agency
        </div>
        <div v-show="!mobile" class="desc">
          <ul class="d-flex">
            <li
              class="mx-2 dark:text-white text-gray-400"
              v-for="menu in menus"
              :key="menu.id"
            >
              <a class="link" @click="activateLink(menu.id)" :href="menu.url">{{
                menu.title
              }}</a>
            </li>
            <div style="color: rgb(67, 0, 236)" class="icon">
              <i
                class="mx-3 dark:text-warning-500 fa-solid fa-magnifying-glass"
              ></i>
              <i class="fa-brands fa-facebook-f"></i>
              <dark-mode></dark-mode>
            </div>
          </ul>
        </div>

        <div
          class="burger"
          v-show="mobile"
          :class="{ 'icon-active': mobileNav }"
          @click="toggleBurger"
        >
          <span class="dark:bg-white bg-red-600"></span>
          <span class="dark:bg-white bg-red-600"></span>
          <span class="dark:bg-white bg-red-600"></span>
        </div>
        <dark-mode class="dark-mobilee"></dark-mode>
        <transition name="down">
          <div class="bg-mobile" v-show="mobileNav" @click="toggleBurger">
            <ul class="mobile-nav">
              <li class="" v-for="menu in menus" :key="menu.id">
                <a class="link mt-5" :href="menu.url">{{ menu.title }}</a>
              </li>

              <div style="color: white" class="icon text-center mt-5">
                <i class="mx-1 fa-brands fa-facebook-f"></i>
                <i class="mx-1 fa-brands fa-facebook-f"></i>
                <i class="mx-1 fa-brands fa-facebook-f"></i>
                <i class="mx-1 fa-brands fa-facebook-f"></i>
                <i class="mx-1 fa-brands fa-facebook-f"></i>
              </div>
            </ul>
          </div>
        </transition>
      </nav>
      <content-header></content-header>
    </header>
  </div>
</template>

<script>
import contentHeader from "./contentHeader.vue";
export default {
  data() {
    return {
      menus: [
        { id: 1, title: "home", url: "#home" },
        { id: 2, title: "about us", url: "#about" },
        { id: 3, title: "team", url: "#team" },
        { id: 4, title: "services", url: "#services" },
        { id: 5, title: "process", url: "#process" },
        { id: 6, title: "clients", url: "#clients" },
        { id: 7, title: "work", url: "#work" },
      ],
      mobile: null,
      mobileNav: null,
      windowWidth: null,
      isNavbarFixed: true,
      isDarkMode: false,
      scrollPosition: 0,
      activeLink: null,
    };
  },
  components: {
    contentHeader,
  },
  methods: {
    toggleBurger() {
      this.mobileNav = !this.mobileNav;
    },
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 992) {
        this.mobile = true;

        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
    ScrollNavbar() {
      const navbar = this.$el.querySelector("nav");
      const navbarRect = navbar.getBoundingClientRect();
      const scrollPosition = window.scrollY || window.pageYOffset;

      this.isNavbarFixed = scrollPosition > navbarRect.top;

      //upadte link
      const links = this.$el.querySelectorAll("nav a");
      let linkRect = null;
      for (let i = 0; i < links.length; i++) {
        const link = links[i];
        linkRect = link.getBoundingClientRect();
        if (
          linkRect.top <= scrollPosition &&
          linkRect.bottom >= scrollPosition
        ) {
          this.activeLink = link.getAttribute("href");
          break;
        }
      }
    },
    activateLink(link) {
      this.activeLink = link;
    },
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  mounted() {
    window.addEventListener("scroll", this.ScrollNavbar);
    this.ScrollNavbar();

    // link active
    const currentUrl = window.location.href;
    const links = this.$el.querySelectorAll("nav a");
    for (let i = 0; i < links.length; i++) {
      const link = links[i];
      if (link.getAttribute("href") === currentUrl) {
        this.activeLink = link.getAttribute("href");
        break;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
nav {
  ul li {
  }
  display: block;
  height: 55px;
}

.circle {
  display: block;
  background: rgba(255, 255, 255, 0.036);
  height: 0px;
  width: 0px;
  border-radius: 50%;
  box-shadow: 0px 0px 100px 150px rgb(255, 255, 255);
  position: absolute;
  top: 42%;
  left: 66%;
  z-index: -1;
  transform: translate(-50%, -55%);
}
@media screen and (max-width: 768px) {
  .circle {
    display: block;
    background: rgba(255, 255, 255, 0.036);
    height: 0px;
    width: 0px;
    border-radius: 50%;
    box-shadow: 0px 0px 100px 110px rgb(255, 255, 255);
    position: absolute;
    top: 70%;
    left: 45%;
    z-index: -1;
    transform: translate(-50%, -55%);
  }
}
@media screen and (max-width: 500px) {
  .circle {
    display: block;
    background: rgba(255, 255, 255, 0.036);
    height: 0px;
    width: 0px;
    border-radius: 50%;
    box-shadow: 0px 0px 100px 110px rgb(255, 255, 255);
    position: absolute;
    top: 60%;
    left: 45%;
    z-index: -1;
    transform: translate(-50%, -55%);
  }
}
.nav {
  box-shadow: 0 0 1px black;
  position: absolute;
  width: 100%;
}
.bg {
  background-color: #bc2d3d;
  height: 100vh;
  position: relative;
  header {
    background-image: url(@/assets/111.png);
    background-position: center;
    background-size: cover;
    position: absolute;
    width: 100%;
    top: 0;
    height: 100vh;
    z-index: 10;

    .nav {
      padding: 0 20px;
      ul {
        list-style: none;
        li a {
          text-decoration: none;
          text-transform: uppercase;

          font-weight: 900;
        }

        .logo {
        }
      }
    }
  }
}

.burger {
  cursor: pointer;
  position: absolute;
  right: 60px;
  z-index: 5;
  top: 17px;
}
.burger span {
  width: 25px;
  height: 3px;

  display: block;
  margin-bottom: 5px;
  border-radius: 20px;
  transition: transform 0.2s ease-in-out;
}
.icon-active span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.icon-active span:nth-child(2) {
  opacity: 0;
}
.icon-active span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.logo {
  z-index: 5;
}
.dark-mobile {
  z-index: 5;
}
.black-enter-active {
  transition: 1s ease all;
}
.black-leave-active {
}
.black-enter-from {
  transform: translateY(-1000px);
}
.black-enter-to {
  transform: translateY(0px);
}
.bg-mobile {
  background: rgb(255, 255, 255);
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  opacity: 0.8;
  z-index: 4;
  .mobile-nav {
    display: flex;
    flex-direction: column;

    li {
      text-align: center;
      text-transform: uppercase;
      margin-top: 70px;
      a {
      }
    }
  }
  li {
  }
}
.dark-mobile {
  margin-top: -3px;
}
.desc {
  margin: 0 40px;
  margin-top: 15px;
}
.link {
  position: relative;
}
.link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  display: block;
  width: 0;
  height: 2px;
  background-color: rgb(149, 149, 149);
  transition: width 1s ease;
}
.link:hover::after {
  width: 100%;
}
.link:active {
}
.fixed-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgb(0, 0, 0);
  width: 100%;
  transition: 1s ease;
  z-index: 9999;
}
nav {
  z-index: 9999;
  width: 100%;
}
.link.activee::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: rgb(149, 149, 149);
}

nav {
  transition: 1s ease;
}
.logo {
  font-size: 30px;
  margin-top: 0px;
}
.icon {
  cursor: pointer;
}
@media screen and (max-width: 500px) {
  .burger {
    position: absolute;
    right: 50px;
  }
  .logo {
    position: absolute;
    left: -20px;
  }
}
.down-enter-active {
  transition: 1s ease;
}
.down-leave-active {
  transition: 1s ease;
}

.down-enter-from {
  opacity: 0;
}
.down-enter-to {
  opacity: 0.8;
}

.down-leave-from {
  opacity: 0.8;
}
.down-leave-to {
  opacity: 0;
}
.nav {
  z-index: 999;
}
</style>
