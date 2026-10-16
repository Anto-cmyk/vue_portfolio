
<script setup>
import { Icon } from "@iconify/vue";

const strengths = [
  {
    icon: "mdi:monitor-dashboard",
    title: "Frontend Development",
    description:
      "Building responsive, accessible interfaces with Vue.js, React, JavaScript, and Tailwind CSS.",
  },
  {
    icon: "mdi:server-network",
    title: "Backend Development",
    description:
      "Developing application logic, REST APIs, authentication, and server-side functionality.",
  },
  {
    icon: "mdi:database-outline",
    title: "Databases & Integration",
    description:
      "Working with MySQL, MongoDB, and Firebase to manage application data and integrate services.",
  },
  {
    icon: "mdi:code-braces",
    title: "Problem Solving",
    description:
      "Writing maintainable code, debugging issues, and improving application reliability.",
  },
];

const technologies = [
  "Vue.js",
  "React",
  "Angular.js",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "PHP",
  "Python",
  "Laravel",
  "MySQL",
  "MongoDB",
  "Git",
];
</script>

<template>
  <section
    id="about"
    aria-labelledby="about-heading"
    class="w-full bg-slate-50 px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
  >
    <div class="mx-auto max-w-6xl">
      <!-- Section heading -->
      <div class="mb-8 max-w-2xl sm:mb-10">
        <p
          class="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-purple-700"
        >
          Get to know me
        </p>

        <h2
          id="about-heading"
          class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl"
        >
          About Me
        </h2>

        <div
          class="mt-4 h-1 w-16 rounded-full bg-purple-700"
          aria-hidden="true"
        ></div>

        <p class="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
          A closer look at my development approach, technical strengths,
          and the technologies I use to build digital solutions.
        </p>
      </div>

      <!-- Professional summary -->
      <div
        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10"
      >
        <div class="flex items-start gap-4">
          <div
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-700"
            aria-hidden="true"
          >
            <Icon icon="mdi:account-tie-outline" class="text-2xl" />
          </div>

          <div class="min-w-0">
            <h3 class="text-xl font-bold text-slate-900 sm:text-2xl">
              Professional Summary
            </h3>

            <p class="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              I am an intermediate full-stack developer focused on building
              modern, responsive, and user-friendly web applications. I work
              across frontend development and backend engineering, turning
              requirements into functional digital products using modern
              frameworks, APIs, and databases.
            </p>

            <p class="mt-3 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              I value clean code, practical problem-solving, and continuous
              learning. My goal is to build software that is maintainable,
              reliable, and useful to the people who use it.
            </p>
          </div>
        </div>
      </div>

      <!-- Areas of expertise -->
      <div class="mt-10 sm:mt-12">
        <h3 class="text-xl font-bold text-slate-900 sm:text-2xl">
          What I Bring
        </h3>

        <p class="mt-2 text-slate-600">
          Practical skills for developing complete web applications.
        </p>

        <div class="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="item in strengths"
            :key="item.title"
            class="group rounded-xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg hover:shadow-slate-900/5"
          >
            <div
              class="flex h-11 w-11 items-center justify-center rounded-lg bg-purple-50 text-purple-700 transition group-hover:bg-purple-700 group-hover:text-white"
              aria-hidden="true"
            >
              <Icon :icon="item.icon" class="text-2xl" />
            </div>

            <h4 class="mt-4 font-bold text-slate-900">
              {{ item.title }}
            </h4>

            <p class="mt-2 text-sm leading-6 text-slate-600">
              {{ item.description }}
            </p>
          </article>
        </div>
      </div>

      <!-- Technology stack -->
      <div class="mt-10 rounded-2xl bg-slate-900 p-5 sm:mt-12 sm:p-8">
        <div class="flex items-center gap-3">
          <Icon
            icon="mdi:code-tags"
            class="shrink-0 text-2xl text-purple-300"
            aria-hidden="true"
          />

          <h3 class="text-xl font-bold text-white sm:text-2xl">
            Technologies I Work With
          </h3>
        </div>

        <p class="mt-2 text-sm leading-6 text-slate-300 sm:text-base">
          Tools and technologies I use across the development process.
        </p>

        <div class="mt-5 flex flex-wrap gap-2">
          <span
            v-for="technology in technologies"
            :key="technology"
            class="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-100 transition hover:border-purple-400/60 hover:bg-purple-500/15"
          >
            {{ technology }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
