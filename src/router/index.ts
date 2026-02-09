
import { createRouter, createWebHistory } from "vue-router";

// Simple imports
import Dashboard from "../components/Dashboard.vue";
import Skill from "../components/Skill.vue";
import Contact from "../components/Contact.vue";
import Project from "../components/Projects.vue";
 import UserRestricted_page from "../components/UserRestricted_page.vue";

const routes = [
  { path: "/skills", component: Skill },
  { path: "/", component: Dashboard },
  { path: "/contacts", component: Contact },
  { path: "/projects", component: Project },
  {path: "/private-repo", component: UserRestricted_page}, //route for private project
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

