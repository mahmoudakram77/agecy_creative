<template>
  <div class="bgg dark:bg-black dark:text-white">
    <nav-bar />
    <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
    <scroll-top></scroll-top>
    <loading-pages></loading-pages>
    <router-view />
  </div>
</template>
<script>
import navBar from "./components/navBar.vue";
import ScrollTop from "./components/scrollTop.vue";
import loadingPages from "./components/loadingPages.vue";

export default {
  components: {
    navBar,
    ScrollTop,
    loadingPages,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
