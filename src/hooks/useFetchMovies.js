import axios from "axios";
import { onMounted, ref, toRef, watch } from "vue";
import { defineExpose } from "vue";

const api_key = import.meta.env.VITE_API_KEY;

const client = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
});

function useFetchMovies(page, findOption) {
  const result = ref(null);
  let moviesl = null
  const err = ref(null);
  async function fetchMovies(page){
    await client
    .get(`/${findOption}?page=${page}&api_key=${api_key}`)
    .then((res) => result.value = res)
  }
    
    


  return { result, err,  fetchMovies };
}

export default useFetchMovies;
