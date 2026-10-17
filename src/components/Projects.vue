
<script setup>
import { Icon } from "@iconify/vue";

const githubProfile = "https://github.com/Anto-cmyk";

const projects = [
  {
    title: "Portfolio Website",
    category: "Frontend Development",
    description:
      "A personal developer portfolio showcasing my skills, experience, and projects through a responsive interface.",
    icon: "mdi:web",
    technologies: ["Vue.js", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/Anto-cmyk/vue_portfolio",
    linkLabel: "View Source",
  },

  {
    title: "Job Searching Website",
    category: "Web Application",
    description:
      "A PHP-based job platform designed to help job seekers explore opportunities and connect with employers.",
    icon: "mdi:briefcase-outline",
    technologies: ["PHP", "HTML", "CSS", "MYSQL", "JavaScript"],
    link: "https://github.com/Anto-cmyk",
    linkLabel: "Explore on GitHub",
  },

  
{
  title: "House Rental Platform",
  category: "Web Application",
  description:
    "A modern rental platform connecting tenants with landlords, making it easy to discover properties, explore listings, and find suitable rental homes.",
  icon: "mdi:home-city-outline",
  technologies: ["React", "Express.js", "TypeScript", "Tailwind CSS", "Firebase"],
  link: "https://rentalsorted.web.app",
  linkLabel: "Visit Website",
},

{
  title: "LoveConnect – Dating & Relationship Platform",
  category: "Full-Stack Development",
  description:
    "A responsive dating and relationship platform built with Angular, Tailwind CSS, and Firebase, featuring user authentication, email verification, profile management, and privacy-focused account access.",
  icon: "mdi:heart-multiple",
  technologies: ["Angular", "TypeScript", "Tailwind CSS", "Firebase", "Firestore"],
  link: "https://findwife.web.app/",
  linkLabel: "View Live",
},
  
{
  title: "Agricultural Products Marketplace",
  category: "E-Commerce",
  description:
    "An online marketplace for browsing and purchasing agricultural products, connecting farmers and customers through a convenient digital shopping experience.",
  icon: "mdi:leaf",
  technologies: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],
  link: "https://github.com/anto-cmyk",
  linkLabel: "View on GitHub",
},

  {
    title: "HTML Portfolio",
    category: "Frontend Development",
    description:
      "An early portfolio project that strengthened my foundation in web development and responsive page design.",
    icon: "mdi:code-tags",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    link: "https://github.com/Anto-cmyk",
    linkLabel: "Explore on GitHub",
  },
  {
    title: "Resume Builder",
    category: "Web Application",
    description:
      "A browser-based resume builder designed to help users create professional CVs using structured forms and downloadable templates.",
    icon: "mdi:file-document-edit-outline",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    link: "https://antocv.vercel.app/",
    linkLabel: "View Live",
  },
  {
    title: "M-Pesa Integration",
    category: "API Integration",
    description:
      "An integration project exploring mobile payment workflows, API communication, and transaction response handling with M-Pesa.",
    icon: "mdi:cellphone-check",
    technologies: ["API", "JavaScript", "M-Pesa Daraja"],
    link: githubProfile,
    linkLabel: "Explore on GitHub",
  },
  {
    title: "Google OAuth Authentication",
    category: "Authentication",
    description:
      "An authentication project exploring Google sign-in and OAuth 2.0 flows for secure account access in web applications.",
    icon: "mdi:shield-account-outline",
    technologies: ["OAuth 2.0", "Google Identity", "Web Development"],
    link: githubProfile,
    linkLabel: "Explore on GitHub",
  },
];

const categories = [
  "All Projects",
  ...new Set(projects.map((project) => project.category)),
];

import { computed, ref } from "vue";

const activeCategory = ref("All Projects");

const filteredProjects = computed(() => {
  if (activeCategory.value === "All Projects") {
    return projects;
  }

  return projects.filter(
    (project) => project.category === activeCategory.value
  );
});
</script>

<template>
  <main class="min-h-screen bg-slate-50 text-slate-800">
    <!-- Projects Header -->
    <header
      class="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 px-5 py-14 text-center sm:py-20"
    >
      <div
        class="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-500/20 blur-3xl"
      ></div>

      <div
        class="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-blue-500/15 blur-3xl"
      ></div>

      <div class="relative z-10 mx-auto max-w-3xl">
        <p
          class="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-purple-300 sm:text-sm"
        >
          My Work
        </p>

        <h1
          class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          Projects &amp; <span class="text-purple-300">Applications</span>
        </h1>

        <div
          class="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
        ></div>

        <p
          class="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
        >
          A selection of projects demonstrating my approach to frontend
          development, backend engineering, API integration, and practical
          software solutions.
        </p>

        <a
          :href="githubProfile"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-purple-300"
        >
          <Icon icon="mdi:github" class="text-xl" />
          Explore My GitHub
          <Icon icon="lucide:arrow-up-right" class="text-lg" />
        </a>
      </div>
    </header>

    <!-- Projects Section -->
    <section
      id="projects"
      class="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20"
    >
      <!-- Section heading -->
      <div
        class="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
      >
        <div>
          <p
            class="text-xs font-bold uppercase tracking-[0.2em] text-purple-700"
          >
            Selected Work
          </p>

          <h2
            class="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl"
          >
            Things I've Built
          </h2>

          <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
            Explore my projects, technologies, and development experience.
          </p>
        </div>

        <span
          class="w-fit rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600"
        >
          {{ filteredProjects.length }} projects
        </span>
      </div>

      <!-- Category filters -->
      <div class="mb-8 flex flex-wrap gap-2" aria-label="Filter projects">
        <button
          v-for="category in categories"
          :key="category"
          type="button"
          :aria-pressed="activeCategory === category"
          @click="activeCategory = category"
          class="rounded-full border px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          :class="
            activeCategory === category
              ? 'border-purple-700 bg-purple-700 text-white shadow-sm'
              : 'border-slate-200 bg-white text-slate-600 hover:border-purple-300 hover:text-purple-700'
          "
        >
          {{ category }}
        </button>
      </div>

      <!-- Project cards -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="project in filteredProjects"
          :key="project.title"
          class="group flex h-full min-w-0 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-xl hover:shadow-slate-900/5"
        >
          <!-- Card top -->
          <div
            class="flex items-center justify-between border-b border-slate-100 bg-gradient-to-r from-slate-50 to-purple-50/50 px-5 py-5"
          >
            <span
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-purple-700 shadow-sm ring-1 ring-slate-200/70 transition group-hover:bg-purple-700 group-hover:text-white"
            >
              <Icon :icon="project.icon" class="text-2xl" />
            </span>

            <span
              class="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 ring-1 ring-slate-200"
            >
              {{ project.category }}
            </span>
          </div>

          <!-- Card content -->
          <div class="flex flex-1 flex-col p-5 sm:p-6">
            <h3
              class="text-lg font-bold leading-snug text-slate-900 transition group-hover:text-purple-800"
            >
              {{ project.title }}
            </h3>

            <p class="mt-3 flex-1 text-sm leading-6 text-slate-600">
              {{ project.description }}
            </p>

            <!-- Technologies -->
            <div class="mt-5 flex flex-wrap gap-2">
              <span
                v-for="technology in project.technologies"
                :key="technology"
                class="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700"
              >
                {{ technology }}
              </span>
            </div>

            <!-- Project link -->
            <a
              :href="project.link || githubProfile"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-6 inline-flex min-h-11 items-center gap-2 border-t border-slate-100 pt-4 text-sm font-bold text-purple-700 transition hover:text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              {{ project.linkLabel || "Explore on GitHub" }}
              <Icon
                icon="lucide:arrow-up-right"
                class="text-lg transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </article>
      </div>

      <!-- GitHub closing panel -->
      <div
        class="mt-12 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8"
      >
        <div class="flex items-start gap-4">
          <span
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-white"
          >
            <Icon icon="mdi:github" class="text-2xl" />
          </span>

          <div>
            <h3 class="text-lg font-bold text-slate-900">
              Explore more of my work
            </h3>

            <p class="mt-1 text-sm leading-6 text-slate-600">
              Visit my GitHub profile for source code, repositories, and
              additional development projects.
            </p>
          </div>
        </div>

        <a
          :href="githubProfile"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          View GitHub Profile
          <Icon icon="lucide:arrow-up-right" class="text-lg" />
        </a>
      </div>
    </section>
  </main>
</template>

<style scoped>
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
  }
}
</style>
