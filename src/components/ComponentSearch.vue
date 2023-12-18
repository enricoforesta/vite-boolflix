<script >
import { store } from '../store';
export default {
    name: "search",
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="search-text">
        <label for="search" class="text-light px-3">CERCA:</label>
        <input v-model="this.store.searchText" @keyup.enter="$emit('search')" type="text" name="search" id="search"
            class="bg-black border-0 text-light p-1 rounded-start-5">
        <button @click="$emit('search')" class="bg-black border-0 text-light px-2 py-1 rounded-end-5  ">
            <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </button>
    </div>
</template>

<style scoped>
input {
    outline: none;
}
</style>
