<script >


export default {
    name: "card",
    props: ['title', 'original_title', 'original_language', 'vote', 'url_img'],
    data() {
        return {
            maxVote: 5,
        }
    },
    computed: {
        voteInteger() {
            return Math.ceil(this.vote / 2)
        }
    }
}
</script>

<template>
    <div>
        <img :src="url_img" alt="cc">
        <h3>Titolo: {{ title }}</h3>
        <h3>Titolo originale: {{ original_title }}</h3>
        <h3>Lingua originale:
            <span v-if="(original_language === 'en')"> <img src="/bandiera-inglese.png" alt="bandiera-inglese"></span>
            <span v-else-if="(original_language === 'it')"> <img src="/bandiera-italiana.png" alt="bandiera-italiana">
            </span>
            <span v-else> {{ original_language }}</span>
        </h3>
        <h3>Voto:<font-awesome-icon icon="fa-solid fa-star" v-for="n in voteInteger " />
            <font-awesome-icon icon="fa-regular fa-star" v-for="n in maxVote - voteInteger " />
        </h3>
    </div>
</template>

<style scoped>
img {
    width: 30px;
}
</style>