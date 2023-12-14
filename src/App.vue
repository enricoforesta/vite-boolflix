<script>
import { store } from './store'
import axios from 'axios';
export default {
  name: "App",
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
      <li>Lingua originale:
        <span v-if="(movie.original_language === 'en')"> <img src="/bandiera-inglese.png" alt="bandiera-inglese"></span>
        <span v-else-if="(movie.original_language === 'it')"> <img src="/bandiera-italiana.png" alt="bandiera-italiana">
        </span>
        <span v-else> {{ movie.original_language }}</span>
      </li>
      <li>Voto: {{ movie.vote_average }}</li>
    </ul>
  </div>
</template>

<style scoped>
img {
  width: 30px;
}
</style>
