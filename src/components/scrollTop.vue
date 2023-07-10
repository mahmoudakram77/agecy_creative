<template>
  <transition name="pop">
    <div class="top" v-show="show" @click="scrollToTop">
      <i class="fa-solid fa-circle-chevron-up"></i>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      windowHight: 0,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    showButton() {
      this.windowHight = window.scrollY;
      if (this.windowHight >= 300) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.showButton);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.showButton);
  },
};
</script>

<style scoped>
.top {
  position: fixed;
  bottom: 0;
  right: 10px;
  z-index: 5;
  font-size: 40px;
  color: brown;
  filter: drop-shadow(0 0 2px black);
  cursor: pointer;
}

.pop-enter-active {
  transition: 0.4s ease;
}
.pop-leave-active {
  transition: 0.2s ease;
}
.pop-enter-from {
  animation: move 0.5s;
}
.pop-enter-to {
  animation: move 0.5s;
}
.pop-leave-to {
  animation: moveR 0.5s;
}
@keyframes move {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes moveR {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
</style>
