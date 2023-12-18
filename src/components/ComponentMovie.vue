<script >
import { store } from '../store';
import ComponentCard from './ComponentCard.vue';
export default {
    name: "movies",
    data() {
        return {
            store
        }
    },
    components: {
        ComponentCard
    },
    methods: {
        // Funzioni per scrollare
        scrollLeft() {
            this.$refs.scrollable.scrollLeft -= 500;
        },
        scrollRight() {
            this.$refs.scrollable.scrollLeft += 500;
        }
    }
}
</script>

<template>
    <!-- Contenitore Movie -->
    <div v-if="this.store.resultsMovies.length">
        <h2 class="text-danger p-4 bg-light fs-2 ">Movie</h2>
        <!-- Contenitore Cards -->
        <div class="movie mx-5 d-flex align-items-baseline ">
            <button @click="scrollLeft()" class="btn btn-outline-light rounded-circle "><font-awesome-icon
                    icon="fa-solid fa-chevron-left" /></button>
            <ul class="d-flex overflow-x-hidden scrollable" ref="scrollable">
                <li v-for="movie in this.store.resultsMovies" class="result ">
                    <!-- Componente Card -->
                    <ComponentCard :title="movie.title" :original_title="movie.original_title" :overview="movie.overview"
                        :original_language="movie.original_language" :vote="movie.vote_average"
                        :url_img="movie.backdrop_path ? this.store.apiConfig.apiImage + movie.backdrop_path : '/images-not-found.png'" />
                    <!-- / Componente Card -->
                </li>
            </ul>
            <button @click="scrollRight()" class="btn btn-outline-light rounded-circle"><font-awesome-icon
                    icon="fa-solid fa-chevron-right" /></button>
        </div>
        <!-- / Contenitore Cards -->
    </div>
    <!-- / Contenitore Movie -->
</template>

<style scoped></style>