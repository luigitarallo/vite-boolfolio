import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import PortfolioPage from "../pages/PortfolioPage.vue";
import ProjectDetailPage from "../pages/ProjectDetailPage.vue";
import FilteredByTypePage from "../pages/FilteredByTypePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: PortfolioPage,
    },
    {
      path: "/projectdetail/:id",
      name: "project-detail",
      component: ProjectDetailPage,
    },
    {
      path: "/project/type/:type_id",
      name: "projects-by-type",
      component: FilteredByTypePage,
    },
  ],
});
export { router };
