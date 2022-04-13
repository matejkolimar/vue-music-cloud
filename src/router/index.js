/* eslint-disable implicit-arrow-linebreak */
import { createRouter, createWebHistory } from "vue-router";
import store from "@/store";
// Dynamic route import
const Home = () => import("@/views/HomeView.vue");
const Manage = () =>
  import(/* webpackChunkName: "groupedChunk" */ "@/views/ManageView.vue");
const Song = () =>
  import(/* webpackChunkName: "groupedChunk" */ "@/views/SongView.vue");
const About = () => import("@/views/AboutView.vue");

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "about",
    path: "/about",
    component: About,
  },
  {
    name: "manage",
    // alias: "/manage",
    path: "/manage-music",
    meta: {
      requiresAuth: true,
    },
    beforeEnter: (to, from, next) => {
      console.log("Manage route Guard");
      next();
    },
    component: Manage,
  },
  {
    path: "/manage",
    redirect: { name: "manage" },
  },
  {
    name: "song",
    path: "/song/:id",
    component: Song,
  },
  {
    path: "/:catchAll(.*)*",
    redirect: { name: "home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});

router.beforeEach((to, from, next) => {
  if (!to.matched.some((record) => record.meta.requiresAuth)) {
    next();
    return;
  }

  if (store.state.auth.userLoggedIn) {
    next();
  } else {
    next({ name: "home" });
  }
});

export default router;
