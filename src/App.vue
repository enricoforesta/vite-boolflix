<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  name: "App",
  data() {
    return {

    }
  },

  components: {
    AppHeader,
    AppMain,
  },


}
</script>

<template>
  <div>
    <AppHeader />
    <AppMain />
  </div>
</template>

<style scoped></style>
