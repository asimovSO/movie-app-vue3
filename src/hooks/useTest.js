import { ref } from "vue";


export function useTest(){
    const test = ref(0)
    const addF = () => {
        test.value += 1
    }

    return { test, addF}
}