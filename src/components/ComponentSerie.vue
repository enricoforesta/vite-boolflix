<script >
import { store } from '../store';
import ComponentCard from './ComponentCard.vue';
export default {
    name: "series",
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
            this.$refs.scrollable.scrollLeft -= 500;
        },
        scrollRight() {
            this.$refs.scrollable.scrollLeft += 500;
        }
    }
}
</script>

<template>
    <!-- Contenitore Series -->
    <div v-if="this.store.resultsSeries.length">
        <h2 class="text-danger p-4 bg-light fs-2 ">Series</h2>
        <!-- Contenitore Cards -->
        <div class="serie mx-5 d-flex align-items-baseline">
            <button @click="scrollLeft()" class="btn btn-outline-light  rounded-circle"><font-awesome-icon
                    icon="fa-solid fa-chevron-left" /></button>
            <ul class="d-flex overflow-x-hidden scrollable" ref="scrollable">
                <li v-for=" serie in this.store.resultsSeries" class="result">
                    <!-- Componente Card -->
                    <ComponentCard :title="serie.name" :original_title="serie.original_name" :overview="serie.overview"
                        :original_language="serie.original_language" :vote="serie.vote_average"
                        :url_img="serie.backdrop_path ? this.store.apiConfig.apiImage + serie.backdrop_path : '/images-not-found.png'" />
                    <!-- / Componente Card -->
                </li>
            </ul>
            <button @click="scrollRight()" class="btn btn-outline-light  rounded-circle"><font-awesome-icon
                    icon="fa-solid fa-chevron-right" /></button>
        </div>
        <!-- / Contenitore Cards -->
    </div>
    <!-- / Contenitore Series -->
</template>

<style scoped lang="scss"></style>