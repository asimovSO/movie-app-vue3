<template>
  <div class="flex gap-3">
    <button class="prev" @click="navigatePrevious">
      <ChevronLeftIcon class="rounded text-white w-6 bg-gray-700" />
    </button>
    <input
      type="number"
      min="1"
      :max="total_pages"
      v-model="currPage"
      @keypress.enter="navigateToPage"
      class="text-black text-center w-24 outline-none"
    />
    <span>/</span>
    <div>{{ total_pages }}</div>
    <button
      class="next rounded text-white w-6 bg-gray-700"
      @click="navigateNext"
    >
      <ChevronRightIcon />
    </button>
  </div>
</template>
<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { defineProps, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import usePagination from '../hooks/usePagination'

const route = useRoute();
const router = useRouter();

const currPage = ref(route.query.page || 1)

defineProps({
  // currPage: [String, Number],
  total_pages: [Number, String]
})

function navigateToPage(){
  router.push({query: {page: currPage.value}})
}

function navigateNext() {
  currPage.value++
  router.push({ query: {page: Number(currPage.value)} });
}

function navigatePrevious(){
  currPage.value--
  router.push({ query: {page: Number(currPage.value)} });

}
</script>

<style scoped>
input[type='number'] {
    -moz-appearance:textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
</style>