<template>
  <button class="text-white mx-2 b" @click="toggleDark()">
    <span style="color: darkblue" v-if="isDark"
      ><i class="fa-solid fa-moon"></i
    ></span>
    <span style="color: rgb(154, 154, 36)" v-else
      ><i class="fa-solid fa-sun"></i
    ></span>
  </button>
</template>

<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style scoped>
.b {
  display: block;
  position: absolute;
  top: 16px;
  right: 20px;
}
</style>
