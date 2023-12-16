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
    }
}
</script>

<template>
    <div v-if="this.store.resultsSeries.length" class="serie">
        <h2>Series</h2>
        <ul class="d-flex flex-wrap row-cols-xxl-4 row-cols-lg-3 row-cols-md-2">
            <li v-for="serie in this.store.resultsSeries" class="result">
                <ComponentCard :title="serie.name" :original_title="serie.original_name"
                    :original_language="serie.original_language" :vote="serie.vote_average"
                    :url_img="serie.backdrop_path ? this.store.apiConfig.apiImage + serie.backdrop_path : '/faviconNetflix.ico'" />
            </li>
        </ul>
    </div>
</template>

<style scoped></style>