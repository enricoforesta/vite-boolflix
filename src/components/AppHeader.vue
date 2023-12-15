<script >
import { store } from '../store'
import axios from 'axios';
import ComponentSearch from './ComponentSearch.vue';

export default {
    name: "AppHeader",
    data() {
        return {
            store
        }
    },
    components: {
        ComponentSearch,

    },
    created() {
        this.callApi()
    },
    methods: {
        callApi() {
            axios.get(this.store.apiConfig.apiUrlMovies, {
                params: {
                    api_key: this.store.apiConfig.apiKey,
                    query: this.store.searchText
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
    <ComponentSearch @search="this.callApi()" />
</template>

<style scoped></style>
