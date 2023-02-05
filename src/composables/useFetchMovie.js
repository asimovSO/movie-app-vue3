import { ref } from "vue";
import { instance, api_key } from "../service/api";

export default function useFetchMovies(){
    const varMovies = ref()

    async function getFetchedMovies(type, page=1){
        const response = await instance(`/movie/${type}?page=${page}&api_key=${api_key}`)
        varMovies.value = response.data
    }

    return {varMovies, getFetchedMovies}

}