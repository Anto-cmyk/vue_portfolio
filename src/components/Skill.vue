
<script setup>
import { Icon } from "@iconify/vue";

const skillGroups = [
  {
    title: "Technical Skills",
    subtitle: "Building modern applications",
    icon: "lucide:code-2",
    accent: "blue",
    skills: [
      {
        name: "Frontend Development",
        icon: "lucide:monitor",
        desc: "Creating responsive, accessible, and interactive user interfaces.",
        tags: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
      },
      {
        name: "Modern Frameworks",
        icon: "lucide:layers",
        desc: "Developing reusable components and dynamic web applications.",
        tags: ["React.js", "Vue.js", "Angular"],
      },
      {
        name: "Backend Development",
        icon: "lucide:server",
        desc: "Building application logic, server-side systems, and REST APIs.",
        tags: ["PHP", "Laravel", "Node.js", "Express.js"],
      },
      {
        name: "Database Management",
        icon: "lucide:database",
        desc: "Structuring data and working with relational and NoSQL databases.",
        tags: ["MySQL", "MongoDB"],
      },
    ],
  },
  {
    title: "Professional Skills",
    subtitle: "How I approach my work",
    icon: "lucide:users",
    accent: "emerald",
    skills: [
      {
        name: "Problem-Solving",
        icon: "lucide:lightbulb",
        desc: "Breaking down technical challenges and developing practical solutions.",
      },
      {
        name: "Communication",
        icon: "lucide:message-circle",
        desc: "Sharing ideas clearly and collaborating effectively with others.",
      },
      {
        name: "Teamwork",
        icon: "lucide:handshake",
        desc: "Working collaboratively toward shared goals and project outcomes.",
      },
      {
        name: "Adaptability",
        icon: "lucide:refresh-cw",
        desc: "Learning new technologies and adjusting to changing requirements.",
      },
    ],
  },
  {
    title: "Tools & Additional Skills",
    subtitle: "Supporting the development process",
    icon: "lucide:wrench",
    accent: "violet",
    skills: [
      {
        name: "Version Control",
        icon: "lucide:git-branch",
        desc: "Managing source code, tracking changes, and collaborating through Git.",
        tags: ["Git", "GitHub"],
      },
      {
        name: "UI/UX Design",
        icon: "lucide:palette",
        desc: "Designing intuitive interfaces with attention to usability and consistency.",
      },
       
      
    ],
  },
];

const accentClasses = {
  blue: {
    icon: "bg-blue-50 text-blue-600",
    label: "text-blue-700 bg-blue-50",
    line: "bg-blue-500",
    hover: "group-hover:border-blue-200",
  },
  emerald: {
    icon: "bg-emerald-50 text-emerald-600",
    label: "text-emerald-700 bg-emerald-50",
    line: "bg-emerald-500",
    hover: "group-hover:border-emerald-200",
  },
  violet: {
    icon: "bg-violet-50 text-violet-600",
    label: "text-violet-700 bg-violet-50",
    line: "bg-violet-500",
    hover: "group-hover:border-violet-200",
  },
};

const technicalCount = skillGroups[0].skills.length;
const totalAreas = skillGroups.reduce(
  (total, group) => total + group.skills.length,
  0
);
</script>

<template>
  <main class="min-h-screen bg-slate-50 text-slate-800">
      
    
<div
  class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 px-5 py-12 text-center shadow-xl sm:py-16 lg:py-20"
>
  <!-- Decorative background accents -->
  <div
    class="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-purple-600/20 blur-3xl"
  ></div>

  <div
    class="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-blue-500/15 blur-3xl"
  ></div>

  <!-- Heading content -->
  <div class="relative z-10 mx-auto max-w-3xl">
    <p
      class="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-purple-300 sm:text-sm"
    >
      My Expertise
    </p>

    <h1
      class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
    >
      Skills
      <span class="text-purple-300">&amp;</span>
      Technologies
    </h1>

    <div
      class="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
    ></div>

    <p
      class="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8"
    >
      The technologies, technical capabilities, and professional skills
      I use to build modern, responsive, and user-focused applications.
    </p>
  </div>
</div>

    <!-- Skills -->
    <section
      id="technical-skills"
      class="mx-auto max-w-6xl space-y-16 px-5 py-16
             sm:px-8 sm:py-20"
    >
      <section
        v-for="(group, groupIndex) in skillGroups"
        :key="group.title"
        :id="groupIndex === 1 ? 'professional-skills' : undefined"
        class="scroll-mt-8"
      >
        <!-- Group heading -->
        <div
          class="mb-7 flex flex-col gap-4 sm:flex-row
                 sm:items-end sm:justify-between"
        >
          <div>
            <div
              class="mb-3 flex items-center gap-3"
            >
              <span
                class="flex h-11 w-11 items-center justify-center
                       rounded-xl"
                :class="accentClasses[group.accent].icon"
              >
                <Icon :icon="group.icon" class="text-xl" />
              </span>

              <span
                class="text-xs font-bold uppercase tracking-[0.18em]
                       text-slate-500"
              >
                0{{ groupIndex + 1 }} / 03
              </span>
            </div>

            <h2 class="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              {{ group.title }}
            </h2>

            <p class="mt-2 text-sm text-slate-500 sm:text-base">
              {{ group.subtitle }}
            </p>
          </div>

          <span
            class="w-fit rounded-full border border-slate-200
                   bg-white px-3 py-1.5 text-sm font-medium
                   text-slate-600"
          >
            {{ group.skills.length }} categories
          </span>
        </div>

        <!-- Cards -->
        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="skill in group.skills"
            :key="skill.name"
            class="group relative overflow-hidden rounded-2xl
                   border border-slate-200 bg-white p-6
                   shadow-sm transition duration-300
                   hover:-translate-y-1 hover:shadow-xl
                   hover:shadow-slate-200/70"
            :class="accentClasses[group.accent].hover"
          >
            <div
              class="absolute inset-x-0 top-0 h-1 origin-left
                     scale-x-0 transition-transform duration-300
                     group-hover:scale-x-100"
              :class="accentClasses[group.accent].line"
            ></div>

            <div class="flex items-start justify-between gap-4">
              <span
                class="flex h-12 w-12 items-center justify-center
                       rounded-xl"
                :class="accentClasses[group.accent].icon"
              >
                <Icon :icon="skill.icon" class="text-2xl" />
              </span>

              <Icon
                icon="lucide:arrow-up-right"
                class="text-xl text-slate-300 transition
                       group-hover:-translate-y-1
                       group-hover:translate-x-1
                       group-hover:text-slate-600"
              />
            </div>

            <h3
              class="mt-5 text-lg font-bold text-slate-900
                     transition"
            >
              {{ skill.name }}
            </h3>

            <p class="mt-2 text-sm leading-6 text-slate-600">
              {{ skill.desc }}
            </p>

            <div
              v-if="skill.tags"
              class="mt-5 flex flex-wrap gap-2"
            >
              <span
                v-for="tag in skill.tags"
                :key="tag"
                class="rounded-lg px-2.5 py-1 text-xs font-semibold"
                :class="accentClasses[group.accent].label"
              >
                {{ tag }}
              </span>
            </div>
          </article>
        </div>
      </section>

      <!-- Closing panel -->
      <div
        class="overflow-hidden rounded-3xl border border-slate-200
               bg-white p-7 sm:p-10"
      >
        <div
          class="flex flex-col gap-5 sm:flex-row
                 sm:items-center sm:justify-between"
        >
          <div class="flex items-start gap-4">
            <span
              class="flex h-12 w-12 shrink-0 items-center
                     justify-center rounded-xl bg-blue-50
                     text-blue-600"
            >
              <Icon icon="lucide:rocket" class="text-2xl" />
            </span>

            <div>
              <h2 class="text-xl font-bold text-slate-900">
                Always building. Always improving.
              </h2>

              <p class="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                I continue to strengthen my skills through hands-on
                development, experimentation, and collaboration.
              </p>
            </div>
          </div>

          <a
            href="mailto:mwangiantony414@gmail.com"
            class="inline-flex shrink-0 items-center justify-center
                   gap-2 rounded-xl bg-slate-900 px-5 py-3
                   text-sm font-semibold text-white transition
                   hover:bg-blue-700"
          >
            Get in touch
            <Icon icon="lucide:arrow-up-right" class="text-lg" />
          </a>
        </div>
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
