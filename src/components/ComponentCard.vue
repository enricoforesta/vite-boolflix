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
    <div class="img border border-light m-3 position-relative ">
        <img class="bg-img w-100 h-100 img-fluid " :src="url_img" alt="cc">
        <div class="info fs-6  position-absolute top-0 d-none m-3  ">
            <h3>Titolo: {{ title }}</h3>
            <h4>Titolo originale: {{ original_title }}</h4>
            <h4>Lingua originale:
                <span v-if="(original_language === 'en')"> <img src="/bandiera-inglese.png" alt="bandiera-inglese"></span>
                <span v-else-if="(original_language === 'it')"> <img src="/bandiera-italiana.png" alt="bandiera-italiana">
                </span>
                <span v-else> {{ original_language }}</span>
            </h4>
            <span>Voto:<font-awesome-icon icon="fa-solid fa-star" v-for="n in voteInteger " />
                <font-awesome-icon icon="fa-regular fa-star" v-for="n in maxVote - voteInteger " />
            </span>
        </div>
    </div>
</template>

<style scoped lang="scss">
.img {
    width: 350px;
    height: 250px;

    &:hover .info {
        display: block !important;
        opacity: none;
        ;
    }

    &:hover .bg-img {
        opacity: 0.1;
    }
}

.info {
    color: white;
    width: 100%;

    img {
        width: 40px;
    }
}
</style>