<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section
    class="bg-transparent flex flex-col items-center border-[3px] border-black rounded-3 justify-center px-2"
  >
    <h1 class="text-2xl font-bold text-black mb-3 underline italics mb-5">About Me</h1>

    <div class="max-w-3xl bg-white shadow-xl rounded-2xl p-5">
      <!-- Title -->
      <h1 class="text-2xl font-bold text-black mb-3 underline italics">
        Professional Summary
      </h1>

      <!-- Summary Text -->
      <p class="text-gray-900 leading-relaxed text-lg text-[15px]">
        I am a dedicated and detail-oriented developer specializing in modern web
        technologies. I enjoy building visually appealing and efficient applications using
        Vue, TailwindCSS, JavaScript, and other modern frameworks. I focus on delivering
        clean, maintainable, and user-friendly applications.
      </p>

      <!-- Router Link Button with Iconify Arrow -->
    </div>

    <div class="mt-8">
      <router-link
        to="/projects"
        class="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-medium shadow-md hover:bg-blue-700 transition group"
      >
        View My Projects

        <!-- Iconify Arrow -->
        <Icon
          icon="material-symbols:arrow-right-alt"
          class="text-xl transform group-hover:translate-x-1 transition"
        />
      </router-link>
    </div>
  </section>
</template>
