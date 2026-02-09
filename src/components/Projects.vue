<script setup>
import { Icon } from "@iconify/vue";

// Example project data
const projects = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio built with Vue and TailwindCSS.",
    icon: "mdi:web",
    link: "https://github.com/Anto-cmyk/vue_portfolio", //public github repo
    private: false,
  },
  {
    title: "Job Searching Website",
    description:
      "A clean and user friendly website for connecting job seekers to employers build with php.",
    icon: "mdi:check-circle-outline",
    link: "https://myjobs.free.nf/", //public website
    private: false,
  },
  {
    title: "HTML portfolio",
    description:
      "A simple html/css/js portfolio that gave me a solid understanding foundation of web programming.",
    icon: "mdi:chart-line",
    link: "https://mwangiantony.kesug.com/", //public website
    private: false,
  },
  {
    title: "React-Express House Searching Web",
    description:
      "A full stack web application built with React,Mysql,Mongo Db,Tailwind CSS and Express for searching houses.",
    icon: "mdi:home-outline",
    link: "/private-repo", //private repo, not accessible to public
    private: true,
  },
  {
    title: "Laravel Ecommerce Website",
    description:
      "A full stack ecommerce website built with Laravel, MySQL and Tailwind CSS.",
    icon: "mdi:shopping-outline",
    link: "/private-repo", //private repo, not accessible to public
    private: true,
  },
];
</script>

<template>
  <section class="min-h-screen bg-gray-100 px-6 py-12">
    <div class="max-w-5xl mx-auto">
      <!-- Page Title -->
      <h1 class="text-4xl font-bold text-gray-800 mb-8 text-center">My Projects</h1>

      <!-- Projects Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="bg-white shadow-md rounded-2xl p-6 hover:shadow-xl transition hover:-translate-y-1"
        >
          <!-- Icon -->
          <Icon :icon="project.icon" class="text-4xl text-blue-600 mb-4" />

          <!-- Title -->
          <h2 class="text-2xl font-semibold text-gray-800 mb-2">
            {{ project.title }}
          </h2>

          <!-- Description -->
          <p class="text-gray-600 mb-4">
            {{ project.description }}
          </p>

          <!-- Visit Button -->
          <router-link
            v-if="project.private"
            :to="project.link"
            class="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
          >
            Visit Project
            <Icon icon="material-symbols:arrow-right-alt-rounded" class="text-xl" />
          </router-link>

          <a
            v-else
            :href="project.link"
            target="_blank"
            class="inline-flex items-center gap-2 text-blue-600 font-medium hover:underline"
          >
            Visit Project
            <Icon icon="material-symbols:arrow-right-alt-rounded" class="text-xl" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
