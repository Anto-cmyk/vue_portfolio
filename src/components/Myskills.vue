<script setup>
import { Icon } from "@iconify/vue";

// All skills (16 total)
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
];

// Background colors for each box
const bgColors = ["bg-red-200", "bg-blue-200", "bg-green-200", "bg-yellow-200"];
</script>

<template>
  <div class="w-[93%] sm:w-[60%] md:w-[45%] mx-auto py-6">
    <h2 class="text-2xl underline text-center mb-6 font-bold">My Skills</h2>

    <div class="grid grid-cols-1 gap-5">
      <!-- Loop through 4 skill containers -->
      <router-link
        to="/skills"
        v-for="(group, gIndex) in groupedSkills"
        :key="gIndex"
        :class="`p-4 rounded-xl shadow-lg ${bgColors[gIndex]}`"
      >
        <!-- Inside each container show 4 skills -->

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
  </div>
</template>
