import { createRouter, createWebHistory } from "vue-router";
import Body from "./components/body.vue";
import aboutPage from "./components/aboutPage.vue"


  const routes = [
  {
    path: "/aboutPage/:id",
    name: "about",
    component: aboutPage
  }
, {
    path: "/",
    component: Body,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
})



export default router;
