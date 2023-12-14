import { reactive } from 'vue';
export const store = reactive({

    apiUrl: 'https://api.themoviedb.org/3/search/movie?api_key=e202549b488227586622af1897302300',
    results: [],
    searchText: "",

})