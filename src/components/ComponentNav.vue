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
                if (response.data.results.length > 0) {
                    this.store.resultsMovies = response.data.results
                    this.store.errorMessage = ''
                    console.log(this.store.resultsMovies)
                } else {
                    this.store.resultsMovies = '',
                        this.store.errorMessage = 'Nessun elemento trovato'
                    console.log("errore")

                }
            }),
                axios.get(this.store.apiConfig.apiUrlSeries, {
                    params: {
                        api_key: this.store.apiConfig.apiKey,
                        language: this.store.apiConfig.language,
                        query: this.store.searchText
                    }
                }).then((response) => {
                    if (response.data.results.length > 0) {
                        this.store.resultsSeries = response.data.results
                        this.store.errorMessage = ''
                        console.log(this.store.resultsSeries)
                    } else {
                        this.store.resultsSeries = '',
                            this.store.errorMessage = 'Nessun elemento trovato'
                        console.log("errore")
                    }

                })
        }
    },
}
</script>

<template>
    <nav class="navbar bg-dark px-5">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/logo.jpeg" alt="Logo" width="50" class="d-inline-block">
                <span class="fs-3 text-danger ps-3">BOOLFLIX</span>
            </a>
            <ComponentSearch @search="this.callApi()" />
        </div>
    </nav>
</template>

<style scoped></style>
