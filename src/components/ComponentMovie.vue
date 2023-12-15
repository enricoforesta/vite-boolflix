<script >
import { store } from '../store';
import ComponentCard from './ComponentCard.vue';
export default {
    data() {
        return {
            store
        }
    },
    components: {
        ComponentCard
    },
}
</script>

<template>
    <div v-if="this.store.resultsMovies.length" class="movie">
        <h2>Movie</h2>
        <ul>
            <li v-for="movie in this.store.resultsMovies" class="result">
                <ComponentCard :title="movie.title" :original_title="movie.original_title"
                    :original_language="movie.original_language" :vote="movie.vote_average"
                    :url_img="movie.backdrop_path ? this.store.apiConfig.apiImage + movie.backdrop_path : '/faviconNetflix.ico'" />
            </li>
        </ul>
    </div>
</template>

<style scoped></style>