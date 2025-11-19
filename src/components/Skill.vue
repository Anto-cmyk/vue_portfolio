<template>
  <section class="min-h-screen bg-gray-300 text-gray-800 py-16 px-6">
    <div class="max-w-6xl mx-auto text-center mb-12">
      <h1 class="text-4xl font-bold mb-3 text-blue-600">My Skills</h1>
      <p class="text-lg text-gray-600">
        A summary of my technical, personal, and other strengths.
      </p>
    </div>

    <!-- Technical Skills -->
    <div class="mb-12 bg-gray-50">
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">💻 Technical Skills</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="skill in technicalSkills"
          :key="skill.name"
          class="p-6 bg-gray-100 rounded-2xl shadow hover:shadow-lg transition"
        >
          <h3 class="text-xl font-bold text-blue-500 mb-2">{{ skill.name }}</h3>
          <p class="text-gray-600">{{ skill.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Personal Skills -->
    <div class="mb-12 bg-gray-500">
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">🌱 Personal Skills</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="skill in personalSkills"
          :key="skill.name"
          class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
        >
          <h3 class="text-xl font-bold text-green-500 mb-2">{{ skill.name }}</h3>
          <p class="text-gray-600">{{ skill.desc }}</p>
        </div>
      </div>
    </div>

    <!-- Other Skills -->
    <div>
      <h2 class="text-2xl font-semibold text-gray-700 mb-4">⚙️ Other Skills</h2>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="skill in otherSkills"
          :key="skill.name"
          class="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
        >
          <h3 class="text-xl font-bold text-purple-500 mb-2">{{ skill.name }}</h3>
          <p class="text-gray-600">{{ skill.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const technicalSkills = [
  { name: "HTML", desc: "Building structured and semantic web pages." },
  { name: "CSS / Tailwind", desc: "Designing modern, responsive user interfaces." },
  {
    name: "JavaScript / Vue.js",
    desc: "Creating interactive, dynamic web applications.",
  },
  { name: "PHP / Laravel", desc: "Developing secure back-end systems and APIs." },
  { name: "MySQL", desc: "Database design and management." },
  { name: "React.js", desc: "Single-page applications and UI components." },
];

const personalSkills = [
  {
    name: "Teamwork",
    desc: "Collaborates effectively with others to achieve shared goals.",
  },
  { name: "Communication", desc: "Clearly conveys ideas both verbally and in writing." },
  { name: "Problem-Solving", desc: "Analyzes challenges and finds creative solutions." },
  { name: "Time Management", desc: "Plans and prioritizes work efficiently." },
  { name: "Adaptability", desc: "Learns quickly and adjusts to changing environments." },
  { name: "Leadership", desc: "Motivates and guides team members toward success." },
];

const otherSkills = [
  { name: "Version Control (Git)", desc: "Proficient in Git and GitHub workflows." },
  {
    name: "UI/UX Design",
    desc: "Designing intuitive and visually appealing interfaces.",
  },
  {
    name: "Networking",
    desc: "Basic understanding of networks and security principles.",
  },

  { name: "Project Management", desc: "Organizing and leading technical projects." },
];
</script>

<style scoped>
/* Optional: Add a subtle fade-in animation */
section {
  animation: fadeIn 0.8s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
