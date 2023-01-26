<template>
  <div class="navbar">
    <div class="logo">Mov</div>
    <div class="nav-links space-y-8">
      <router-link class="md:block p-4 rounded" active-class="nav-link-active" v-for='{ path, icon, activeIcon } in menu' :key='path' :to='path'>
        <component :is='route.path === path ? activeIcon : icon' class="w-6 h-6"/>
      </router-link>
    </div>
    <div class="author-db"></div>
  </div>
</template>
<script setup>
import { HomeIcon, Squares2X2Icon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import {HomeIcon as HomeSolid, Squares2X2Icon as ListSolid, MagnifyingGlassIcon as MagnnifyingSolid} from '@heroicons/vue/24/solid'
import { useRoute, useRouter } from 'vue-router'
    const route = useRoute()

    const menu = [
      {
        path: '/home',
        icon: HomeIcon,
        activeIcon: HomeSolid
      },
      {
        path: '/categories',
        icon: Squares2X2Icon,
        activeIcon: ListSolid
      },
      {
        path: '/search',
        icon: MagnifyingGlassIcon,
        activeIcon: MagnnifyingSolid
      }
    ]

    const router = useRouter()

</script>