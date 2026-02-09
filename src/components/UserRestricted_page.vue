<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-white flex items-center justify-center px-4">
    <div
      class="max-w-xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl"
    >
      <div class="flex justify-center mb-6">
        <div class="bg-amber-500/10 p-4 rounded-full">
          <Icon icon="mdi:lock-outline" width="40" class="text-amber-400" />
        </div>
      </div>

      <div class="flex flex-row justify-around mb-[35px] gap-4">
        <router-link
          to="/"
          class="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
        >
          <Icon icon="material-symbols:arrow-left-alt-rounded" class="text-xl" />
          Back to Home
        </router-link>

        <router-link
          to="/projects"
          class="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
        >
          Back to Projects
          <Icon icon="material-symbols:arrow-right-alt-rounded" class="text-xl" />
        </router-link>
      </div>

      <h1 class="text-2xl font-bold text-center mb-2">Private Repository</h1>
      <p class="text-gray-400 text-center mb-6">
        This project's source code is private. Access is available upon request.
      </p>
      <router-link
        to="/contacts"
        class="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-black font-medium px-4 py-3 rounded-lg transition"
      >
        <Icon icon="mdi:email-outline" width="18" />
        Request Access
      </router-link>
    </div>
  </div>
</template>
