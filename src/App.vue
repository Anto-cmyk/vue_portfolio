<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />

  <div
    class="overflow-auto scroll-smooth ease-out scroll-in mt-3 w-full flex flex-col bg-linear-to-b from-slate-100 via-slate-900 to-slate-700"
  >
    <router-view> </router-view>
  </div>

  <Footer />
</template>

<style scoped></style>
