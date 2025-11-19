<script>
import { createRouter, createWebHistory } from "vue-router";

// Simple imports
import Skills from "../components/Myskills.vue";
import Dashboard from "../components/Dashboard.vue";
import Skill from "../components/Skill.vue";
import Contact from "../components/Contact.vue";
import Project from "../components/Projects.vue";

const routes = [
  { path: "/skills", component: Skill },
  { path: "/", component: Dashboard },
  { path: "/contacts", component: Contact },
  { path: "/projects", component: Project },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
</script>
