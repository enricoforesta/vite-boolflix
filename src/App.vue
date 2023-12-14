<script>
import { store } from './store'
import axios from 'axios';
export default {
  data() {
    return {
      store
    }
  },
  created() {
    this.callApi()
  },
  methods: {
    callApi() {
      const myUrl = `${this.store.apiUrl}&query=${this.store.searchText}`
      console.log(myUrl)
      axios.get(myUrl).then((response) => {
        this.store.resultsMovie = response.data.results
        console.log(response.data.results)
        console.log(this.store.resultsMovie)
      })
    }
  },

}
</script>

<template>
  <div class="search-text">
    <label for="search">cerca il tuo film</label>
    <input v-model="this.store.searchText" type="text" name="search" id="search">
    <input @click="this.callApi()" type="button" value="cerca">
  </div>
  <div class="movie">
    <h3>Movie</h3>
    <ul v-for="movie in this.store.resultsMovie" class="result">
      <li>Titolo: {{ movie.title }}</li>
      <li>Titolo originale: {{ movie.original_title }}</li>
      <li>Lingua originale: {{ movie.original_language }}</li>
      <li>Voto: {{ movie.vote_average }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
