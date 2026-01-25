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
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
        top: 80,
      };
    }
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.afterEach((to) => {
  const baseTitle = "FM - Terminal File Manager";
  if (to.name === "docs") {
    document.title = `Documentation | ${baseTitle}`;
  } else if (to.name === "changelog") {
    document.title = `Changelog | ${baseTitle}`;
  } else {
    document.title = baseTitle;
  }
});

export default router;
