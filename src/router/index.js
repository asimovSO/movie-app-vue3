import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import MoviePage from "../pages/MoviePage.vue";
import ListMovies from "../pages/ListMovies.vue";


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: HomePage,
      alias: '/',
      name: 'home'
    },
    {
      path: '/movies/:type',
      component:  () => import('../pages/ListMovies.vue'),
      name: 'movies'
    },
    {
      path: "/movies/:type/:id",
      component: () => import('../pages/MoviePage.vue'),
      name: "moviePage",
    },
    {
      path: '/search',
      component: () => import('../pages/SearchPage.vue'),
      name: 'search'
    }
  ],
});
