import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import MoviePage from "../pages/MoviePage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home",
      children: [
        {
          path: "/home",
          component: HomePage,
        },
      ],
    },
    {
      path: "/movies/:id",
      component: MoviePage,
    },
  ],
});
