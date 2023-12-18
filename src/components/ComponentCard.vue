<script >
export default {
    name: "card",
    props: ['title', 'original_title', 'original_language', 'vote', 'url_img', 'overview'],
    data() {
        return {
            maxVote: 5,
        }
    },
    computed: {
        // Funzione per ritornare un numero diviso 2 arrotondato per eccesso
        voteInteger() {
            return Math.ceil(this.vote / 2)
        },
        // Funzione per ritornare solo n parole
        shortOverview() {
            let words = this.overview.split(' ');
            if (words.length > 5) {
                return words.slice(0, 50).join(' ') + '...';
            }
            return this.overview;
        }
    }
}
</script>

<template>
    <!-- Contenitore card -->
    <div class="img border border-light m-3 position-relative ">
        <img class="bg-img w-100 h-100 img-fluid " :src="url_img" alt="cc">
        <!-- Contenitore info -->
        <div class="info position-absolute top-0 p-3 d-none">
            <h3>Titolo: {{ title }}</h3>
            <h4 v-if="title !== original_title">Titolo originale: {{ original_title }}</h4>
            <h4>Lingua originale:
                <span v-if="original_language === 'en'" class="fi fi-gb">
                </span>
                <span v-else-if="original_language === 'ja'" class="fi fi-jp">
                </span>
                <span v-else class="fi" :class="`fi-${original_language}`">
                </span>
            </h4>
            <span>Voto:<font-awesome-icon icon="fa-solid fa-star" v-for="n in voteInteger " />
                <font-awesome-icon icon="fa-regular fa-star" v-for="n in maxVote - voteInteger " />
            </span>
            <h5>Overview: {{ shortOverview }}</h5>
        </div>
        <!-- /Contenitore info -->
    </div>
    <!-- /Contenitore card -->
</template>

<style scoped lang="scss">
// Contenitore immagine card
.img {
    width: 500px;
    height: 400px;

    &:hover .info {
        display: block !important;
        opacity: none;
        ;
    }

    &:hover .bg-img {
        opacity: 0.1;
    }
}

// Contenitore info
.info {
    color: white;
    width: 100%;

    img {
        width: 40px;
    }
}
</style>