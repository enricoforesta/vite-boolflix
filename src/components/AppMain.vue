<script >
import ComponentMovie from './ComponentMovie.vue';
import ComponentSerie from './ComponentSerie.vue';
import { store } from '../store';
export default {
    name: "AppMain",
    data() {
        return {
            store
        }
    },
    components: {
        ComponentMovie,
        ComponentSerie,
    },
}
</script>
<template>
    <h3 v-if="this.store.errorMessage" class="text-light p-3">{{ this.store.errorMessage }}
    </h3>
    <ComponentMovie />
    <ComponentSerie />
</template>


