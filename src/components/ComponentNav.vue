<script >
import ComponentSearch from './ComponentSearch.vue';
import { store } from '../store'
import axios from 'axios';

export default {
    name: "Nav",
    data() {
        return {
            store
        }
    },
    components: {
        ComponentSearch
    }, created() {
        this.callApi()
    },
    methods: {
        callApi() {
            axios.get(this.store.apiConfig.apiUrlMovies, {
                params: {
                    api_key: this.store.apiConfig.apiKey,
                    language: this.store.apiConfig.language,
                    query: this.store.searchText,
                }
            }).then((response) => {
                this.store.resultsMovies = response.data.results
                console.log(this.store.resultsMovies)
            }),
                axios.get(this.store.apiConfig.apiUrlSeries, {
                    params: {
                        api_key: this.store.apiConfig.apiKey,
                        query: this.store.searchText
                    }
                }).then((response) => {
                    this.store.resultsSeries = response.data.results
                    console.log(this.store.resultsSeries)
                })
        }
    },
}
</script>

<template>
    <nav class="navbar bg-dark px-5">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/faviconNetflix.ico" alt="Logo" width="50" class="d-inline-block">
                <span class="fs-3 text-danger ps-3">BOOLFLIX</span>
            </a>
            <ComponentSearch @search="this.callApi()" />
        </div>
    </nav>
</template>

<style scoped></style>
