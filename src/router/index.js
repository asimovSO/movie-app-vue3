import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import MoviePage from "../pages/MoviePage.vue";
import ListMovies from "../pages/ListMovies.vue";

import TestPage from "../pages/TestPage.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: HomePage,
    },
    {
      path: '/movies/:type',
      component: import('../pages/ListMovies.vue')
    },
    {
      path: "/movies/:type/:id",
      component: MoviePage,
      name: "moviePage",
    },
  ],
});
