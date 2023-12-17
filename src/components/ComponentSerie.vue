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
    methods: {
        scrollLeft() {
            this.$refs.scrollable.scrollLeft -= 300;
        },
        scrollRight() {
            this.$refs.scrollable.scrollLeft += 300;

        }
    }
}
</script>

<template>
    <div v-if="this.store.resultsMovies.length">
        <h2 class="text-danger p-4 bg-light fs-2 ">Series</h2>
        <div class="serie mx-5 d-flex align-items-baseline">
            <button @click="scrollLeft" class="btn btn-outline-light  rounded-circle"><font-awesome-icon
                    icon="fa-solid fa-chevron-left" /></button>
            <ul class="d-flex overflow-x-hidden scrollable" ref="scrollable">
                <li v-for=" serie in this.store.resultsSeries" class="result">
                    <ComponentCard :title="serie.name" :original_title="serie.original_name" :overview="serie.overview"
                        :original_language="serie.original_language" :vote="serie.vote_average"
                        :url_img="serie.backdrop_path ? this.store.apiConfig.apiImage + serie.backdrop_path : '/faviconNetflix.ico'" />
                </li>
            </ul>
            <button @click="scrollRight" class="btn btn-outline-light  rounded-circle"><font-awesome-icon
                    icon="fa-solid fa-chevron-right" /></button>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>