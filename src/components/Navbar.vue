<template>
  <div class="navbar">
    <div class="logo hidden md:block">Mov</div>
    <div class="nav-links md:space-y-8 space-x-8 md:space-x-0">
      <router-link class="md:block sm:block p-4 rounded" active-class="nav-link-active" v-for='{ path, icon, activeIcon, name } in menu' :key='path' :to='path'>
        <component :is='route.name === name ? activeIcon : icon' class="w-6 h-6"/>
      </router-link>
    </div>
    <div class="author-db"></div>
  </div>
</template>
<script setup>
import { HomeIcon, BookmarkIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import {HomeIcon as HomeSolid, BookmarkIcon as BookmarkSolid, MagnifyingGlassIcon as MagnnifyingSolid} from '@heroicons/vue/24/solid'
import { useRoute, useRouter } from 'vue-router'
    const route = useRoute()

    const menu = [
      {
        path: '/home',
        name: 'home',
        icon: HomeIcon,
        activeIcon: HomeSolid
      },
      {
        path: '/favorites',
        name: 'favorites',
        icon: BookmarkIcon,
        activeIcon: BookmarkSolid
      },
      {
        path: '/search',
        name: '',
        icon: MagnifyingGlassIcon,
        activeIcon: MagnnifyingSolid
      }
    ]

    const router = useRouter()

</script>