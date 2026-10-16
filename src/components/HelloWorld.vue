
<script setup>
</script>

<template>
  <section
    class="mt-3 w-full overflow-hidden bg-gradient-to-b from-slate-500 via-slate-600 to-slate-700 p-3 sm:p-5"
  >
    <div
      class="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 overflow-hidden rounded-xl border-2 border-amber-400 bg-purple-100 p-4 shadow-xl shadow-black/30 sm:p-6 md:flex-row md:gap-8 lg:min-h-[420px] lg:p-8"
    >
      <!-- Text Section: Left on desktop, top on mobile -->
      <div
        class="flex w-full min-w-0 flex-col items-center justify-center text-center md:w-[42%] md:flex-shrink-0 md:items-start md:text-left"
      >
        <span
          class="rounded-full bg-purple-200 px-4 py-2 text-sm font-semibold text-purple-900"
        >
          Full-Stack Developer
        </span>

        <h1
          class="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl"
        >
          Antony Mwangi
        </h1>

        <h2 class="mt-3 text-lg font-semibold text-purple-900 sm:text-xl">
          Frontend · Backend · Web Applications
        </h2>

        <p
          class="mt-4 max-w-xl text-base leading-7 text-slate-700 sm:text-lg"
        >
          Intermediate developer based in Kenya, open to work and passionate about building impactful digital solutions.
        </p>

        <div class="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
          <router-link
           to="/projects"
            class="inline-flex min-h-11 items-center justify-center rounded-lg bg-purple-800 px-5 py-3 font-semibold text-white transition hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            View Projects
          </router-link>

          <router-link
           to="/contacts"
            class="inline-flex min-h-11 items-center justify-center rounded-lg border-2 border-purple-800 px-5 py-3 font-semibold text-purple-900 transition hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
          >
            Contact Me
          </router-link>
        </div>
      </div>

      <!-- Image Section: Right on desktop, below text on mobile -->
      <div class="w-full min-w-0 md:flex-1">
        <div
          class="mx-auto h-[280px] w-full max-w-md overflow-hidden rounded-xl border-2 border-amber-400 bg-slate-200 shadow-lg sm:h-[360px] md:h-[380px] md:max-w-none lg:h-[440px]"
        >
          <img
            src="/WhatsApp%20Image%202026-10-16%20at%205.52.22%20PM.jpeg"
            alt="Antony Mwangi, web developer"
            class="block h-full w-full object-cover object-[center_20%]"
            fetchpriority="high"
          />
        </div>
      </div>
    </div>
  </section>
</template>
