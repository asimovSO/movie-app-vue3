<template>
  <div class="flex items-stretch gap-3 py-4">
    <button class="prev rounded-md p-2 bg-slate-900 hover:bg-rose-600 transition-all" @click="navigatePrevious">
      <ChevronLeftIcon class=" text-white w-6 h-6" />
    </button>
    <div class="items-center flex gap-3 h-full text-lg">
      <input type="number" min="1" :max="total_pages" v-model="currPage" @keypress.enter="navigateToPage"
      class=" py-2 h-full text-center w-24 outline-none bg-gray-900 rounded-md" />
    <span>/</span>
    <div>{{ total_pages }}</div>
    </div>
    <button class="next rounded-md p-2 bg-slate-900 hover:bg-rose-600 transition-all" @click="navigateNext">
      <ChevronRightIcon class=" text-white w-6 h-6" />
    </button>
  </div>
</template>
<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/solid";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

const route = useRoute();
const router = useRouter();

const currPage = ref(route.query.page || 1)

const props = defineProps({
  total_pages: [Number, String]
})

function navigateToPage() {
  router.push({ query: { page: currPage.value } })
}

function navigateNext() {
  if (currPage.value < props.total_pages) {
    currPage.value++
    router.push({ query: { page: Number(currPage.value) } });
  }
  else{
    currPage.value = props.total_pages
  }
}

function navigatePrevious() {
  currPage.value--
  router.push({ query: { page: Number(currPage.value) } });

}
</script>

<style scoped>
input[type='number'] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>