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
        this.store.results = response.data.results
        console.log(response.data.results)
        console.log(this.store.results)
      })
    }
  },

}
</script>

<template></template>

<style scoped></style>
