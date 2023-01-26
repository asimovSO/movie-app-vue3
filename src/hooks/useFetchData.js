import axios from "axios";
import { ref, toRef } from "vue";
import { defineExpose } from "vue";

const api_key = import.meta.env.VITE_API_KEY;

const client = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
});

function useFetchData(page, findOption) {
  const result = ref(null);
  const err = ref(null);
  client
    .get(`/${findOption}?page=${page}&api_key=${api_key}`)
    .then((res) => (result.value = res.data));

  return { result, err };
}

export default useFetchData;
