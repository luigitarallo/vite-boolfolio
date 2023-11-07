import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import PortfolioPage from "../pages/PortfolioPage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/porfolio",
      name: "porfolio",
      component: PortfolioPage,
    },
  ],
});
export { router };
