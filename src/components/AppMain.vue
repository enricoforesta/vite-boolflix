<script >
import ComponentMovie from './componentMovie.vue'
import ComponentSerie from './ComponentSerie.vue';
export default {
    name: "AppMain",
    data() {
        return {

        }
    },
    created() {

    },
    components: {
        ComponentMovie,
        ComponentSerie,
    },
    methods: {
    },

}
</script>

<template>
    <ComponentMovie />
    <ComponentSerie />
</template>

<style scoped></style>
