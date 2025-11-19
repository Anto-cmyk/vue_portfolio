<script setup>
import { ref } from "vue";
const msg = ref("Welcome to Your Vue.js App");
</script>

<template>
  <!-- MAIN BODY -->
  <div
    class="mt-3 w-full flex flex-col bg-linear-to-b from-slate-500 via-slate-600 to-slate-700"
  >
    <!-- Text Section -->

    <div
      class="flex flex-col sm:flex-row sm:justify-between sm:items-center w-full h-fit sm:h-[400px] border-2 border-amber-400 bg-purple-200 shadow-lg shadow-black/30 rounded-lg py-5"
    >
      <div class="flex flex-col sm:w-[40%] w-[90%] items-center">
        <p class="text-green-900">Fullstack/backend/frontend</p>
        <h4 class="font-bold mb-5 underline sm:text-2xl">Developer</h4>

        <h2 class="italics sm:text-xl text-[16px] text-center text-gray-950">
          I am Antony Mwangi from Nairobi,Kenya.I code,craft and design websites and
          Softwares.
        </h2>
      </div>

      <!-- Image Section -->
      <div>
        <img
          src="\pexels-goumbik-574071.jpg"
          alt="Hero Image"
          class="sm:w-[770px] mt-2 ml-[5%] justify-center sm:h-[400px] w-[90%] h-full rounded-xl sm:rounded-full sm:border-4 object-cover object-center sm:border-amber-400"
        />
      </div>
    </div>
  </div>
  <br />
</template>

<style scoped></style>
