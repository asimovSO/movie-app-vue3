<template>
  <div class="flex gap-3">
    <button class="prev" @click="goToPrevPage">
      <ChevronLeftIcon class="rounded text-white w-6 bg-gray-700" />
    </button>
    <input
      type="text"
      :value="currPage"
      @keypress.enter="goToPage"
      class="text-black text-center w-24 outline-none"
    />
    <span>/</span>
    <div>{{ total_pages }}</div>
    <button
      class="next rounded text-white w-6 bg-gray-700"
      @click="goNext"
    >
      <ChevronRightIcon />
    </button>
  </div>
</template>
<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { defineProps, onMounted, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import usePagination from '../hooks/usePagination'

const route = useRoute();
const router = useRouter();

defineProps({
  goNext: Function,
  currPage: [String, Number],
  total_pages: [Number, String]
})

</script>