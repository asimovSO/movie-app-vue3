import { computed, onMounted, ref, watch, watchEffect } from "vue";
import { useRoute, useRouter } from "vue-router";
import axios from "axios";

//this var outside for global state

function usePagination() {
const result = ref();

  const api_key = import.meta.env.VITE_API_KEY;
  const route = useRoute();
  const router = useRouter();
  let currPage = ref(route.query.page || 1);
  let currType = ref(route.params.type || 'popular')

  const fetchMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${currType.value}?page=${currPage.value}&api_key=${api_key}`
      )
      .then((res) => (result.value = res.data));

    console.log("call");
    console.log(result.value);
  };

  const goNext = () => {
    // console.log(result.value);
    // console.log("call next");
    currPage.value = Number(currPage.value) + 1;
    router.push({ query: { page: Number(currPage.value) } });
    fetchMovies();
  };

  return {
    result,
    currPage: computed(() => currPage.value),
    goNext,
    fetchMovies,
  };
}

export default usePagination;
