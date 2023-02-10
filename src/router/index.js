import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import MoviePage from "../pages/MoviePage.vue";
import ListMovies from "../pages/ListMovies.vue";


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('../pages/404Page.vue')
    },
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
      path: "/movie/:id",
      component: () => import('../pages/MoviePage.vue'),
      name: "moviePage",
    },
    {
      path: '/search',
      component: () => import('../pages/SearchPage.vue'),
      name: 'search'
    },
    {
      path: '/favorites',
      component: () => import('../pages/FavoritePage.vue'),
      name: 'favorites'
    }
  ],
});
