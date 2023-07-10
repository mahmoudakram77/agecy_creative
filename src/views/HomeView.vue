<template>
  <section id="about">
    <div class="about dark:bg-black dark:text-white">
      <about-us></about-us>
    </div>
  </section>
  <!-- section team -->

  <section id="team">
    <div class="team dark:bg-black dark:text-white">
      <teamSec />
    </div>
  </section>

  <section id="work">
    <div class="work dark:bg-black dark:text-white">
      <workSec />
    </div>
  </section>
  <section id="three">
    <div class="work dark:bg-black dark:text-white">
      <secThree />
    </div>
  </section>
  <section id="four">
    <div class="work dark:bg-black dark:text-white">
      <sec-four></sec-four>
    </div>
  </section>
  <section id="footer">
    <div class="work dark:bg-black dark:text-white">
      <footer-sec></footer-sec>
    </div>
  </section>
</template>

<script>
import aboutUs from "@/components/aboutUs.vue";
import teamSec from "@/components/teamSec.vue";
import workSec from "@/components/workSec.vue";
import secThree from "@/components/secThree.vue";
import SecFour from "@/components/secFour.vue";
import footerSec from "@/components/footerSec.vue";
export default {
  components: { aboutUs, teamSec, workSec, secThree, SecFour, footerSec },
};
</script>

<style scoped></style>
