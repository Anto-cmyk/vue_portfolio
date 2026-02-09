<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function navClass(isActive) {
  return [
    "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer w-full sm:w-auto",
    isActive
      ? "text-amber-400 bg-slate-800"
      : "text-gray-300 hover:text-white hover:bg-slate-800",
  ];
}
</script>

<template>
  <header
    class="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md text-white shadow-lg shadow-black/30 z-50"
  >
    <div class="h-20 flex items-center justify-between px-4">
      <!-- Logo -->
      <div class="flex items-center text-lg font-semibold">
        <span class="text-amber-500 italic font-bold text-xl">A</span>
        <span class="text-gray-100 ml-1">ntony</span>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden sm:flex gap-6 text-[15px]">
        <router-link to="/" v-slot="{ isActive }">
          <div :class="navClass(isActive)">
            <Icon icon="mdi:home-outline" width="18" />
            <span>Home</span>
          </div>
        </router-link>

        <router-link to="/skills" v-slot="{ isActive }">
          <div :class="navClass(isActive)">
            <Icon icon="mdi:lightning-bolt-outline" width="18" />
            <span>Skills</span>
          </div>
        </router-link>

        <router-link to="/projects" v-slot="{ isActive }">
          <div :class="navClass(isActive)">
            <Icon icon="mdi:folder-outline" width="18" />
            <span>Projects</span>
          </div>
        </router-link>

        <router-link to="/contacts" v-slot="{ isActive }">
          <div :class="navClass(isActive)">
            <Icon icon="mdi:email-outline" width="18" />
            <span>Contacts</span>
          </div>
        </router-link>
      </nav>

      <!-- Mobile Menu Button -->
      <button class="sm:hidden text-gray-200" @click="toggleMenu">
        <Icon :icon="isOpen ? 'mdi:close' : 'mdi:menu'" width="28" />
      </button>
    </div>

    <!-- Mobile Navigation -->
    <div
      v-show="isOpen"
      class="sm:hidden px-4 pb-4 flex flex-col gap-2 border-t border-slate-700"
    >
      <router-link to="/" v-slot="{ isActive }" @click="toggleMenu">
        <div :class="navClass(isActive)">
          <Icon icon="mdi:home-outline" width="18" />
          <span>Home</span>
        </div>
      </router-link>

      <router-link to="/skills" v-slot="{ isActive }" @click="toggleMenu">
        <div :class="navClass(isActive)">
          <Icon icon="mdi:lightning-bolt-outline" width="18" />
          <span>Skills</span>
        </div>
      </router-link>

      <router-link to="/projects" v-slot="{ isActive }" @click="toggleMenu">
        <div :class="navClass(isActive)">
          <Icon icon="mdi:folder-outline" width="18" />
          <span>Projects</span>
        </div>
      </router-link>

      <router-link to="/contacts" v-slot="{ isActive }" @click="toggleMenu">
        <div :class="navClass(isActive)">
          <Icon icon="mdi:email-outline" width="18" />
          <span>Contacts</span>
        </div>
      </router-link>
    </div>
  </header>

  <!-- spacing below fixed header -->
  <div class="h-20"></div>
</template>
