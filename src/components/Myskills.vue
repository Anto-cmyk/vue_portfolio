<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

// All skills (20 total)
const skills = [
  { name: "React js", icon: "logos:react" },
  { name: "Vue", icon: "logos:vue" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss" },
  { name: "JavaScript", icon: "logos:javascript" },

  { name: "Php", icon: "logos:php" },
  { name: "Laravel", icon: "logos:laravel" },
  { name: "Node js", icon: "logos:nodejs" },
  { name: "Express js", icon: "logos:express" },

  { name: "HTML5", icon: "logos:html-5" },
  { name: "Redis", icon: "logos:redis" },
  { name: "MySQL", icon: "logos:mysql" },
  { name: "Breeze", icon: "logos:laravel-breeze" },

  { name: "MongoDB", icon: "logos:mongodb" },
  { name: "Django", icon: "logos:django-icon" },
  { name: "CSS", icon: "logos:css-3" },
  { name: "REST API Integration", icon: "mdi:api" },

  { name: "PyQt5 /Python", icon: "logos:python" },
  { name: "JetBrain", icon: "logos:jetbrains" },
  { name: "Git", icon: "logos:git" },
  { name: "Github", icon: "logos:github" },
];

// Split skills into groups of 4
const groupedSkills = [
  skills.slice(0, 4),
  skills.slice(4, 8),
  skills.slice(8, 12),
  skills.slice(12, 16),
  skills.slice(16, 20),
];

// Background colors for each box
const bgColors = [
  "bg-red-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-yellow-200",
  "bg-purple-200",
];

// State to toggle see more/less
const showAll = ref(false);

function toggleShow() {
  showAll.value = !showAll.value;
}
</script>

<template>
  <div class="w-[93%] sm:w-[60%] md:w-[45%] mx-auto py-6">
    <h2 class="text-2xl underline text-center mb-6 font-bold text-green-600">
      My Skills
    </h2>

    <div class="grid grid-cols-1 gap-5">
      <!-- Loop through skill containers -->
      <router-link
        v-for="(group, gIndex) in groupedSkills"
        :key="gIndex"
        v-show="gIndex === 0 || showAll"
        :class="`p-4 rounded-xl shadow-lg ${bgColors[gIndex]}`"
      >
        <ul class="grid grid-cols-2 gap-2">
          <li
            v-for="(skill, index) in group"
            :key="index"
            class="flex items-center gap-1 p-1 bg-white border border-gray-300 shadow-md rounded-md"
          >
            <Icon :icon="skill.icon" class="w-4 h-4" />
            <span class="font-medium">{{ skill.name }}</span>
          </li>
        </ul>
      </router-link>
    </div>

    <!-- See More / See Less Button -->
    <div class="flex justify-center mt-4">
      <button
        @click="toggleShow"
        class="px-6 py-2 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-600 transition"
      >
        {{ showAll ? "See Less" : "See More ..." }}
      </button>
    </div>
  </div>
</template>
