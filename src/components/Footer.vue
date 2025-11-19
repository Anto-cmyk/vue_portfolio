<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <footer class="w-full bg-gray-900 text-gray-300 py-2 mt-5">
    <div class="max-w-5xl mx-auto flex flex-col items-center gap-3">
      <!-- Copyright -->
      <p class="text-sm">
        © {{ new Date().getFullYear() }} Antony Mwangi. All rights reserved.
      </p>

      <!-- Social Icons -->
      <div class="flex items-center gap-6">
        <!-- GitHub -->
        <a
          href="https://github.com/anto-cymk"
          target="_blank"
          class="hover:text-white transition"
        >
          <Icon icon="mdi:github" class="text-3xl" />
        </a>

        <!-- LinkedIn -->
        <a
          href="https://linkedin.com/in/antony-mwangi-046188320"
          target="_blank"
          class="hover:text-white transition"
        >
          <Icon icon="mdi:linkedin" class="text-3xl" />
        </a>
      </div>
    </div>
  </footer>
</template>
