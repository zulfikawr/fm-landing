import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Docs from "../views/Docs.vue";
import Changelog from "../views/Changelog.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/docs",
      name: "docs",
      component: Docs,
    },
    {
      path: "/changelog",
      name: "changelog",
      component: Changelog,
    },
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
