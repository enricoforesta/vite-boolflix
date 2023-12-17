<script >
import { store } from '../store';
export default {
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="search-text">
        <label for="search">cerca il tuo film </label>
        <input v-model="this.store.searchText" @keyup.enter="$emit('search')" type="text" name="search" id="search">
        <input @click="$emit('search')" type="button" value="cerca">
    </div>
</template>

<style scoped></style>
