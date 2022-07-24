
<template>
    <section @click.prevent="showDetails" class="preview-container">
        <Transition name="fade">
            <el-carousel v-if="this.isLoad" class="preview-img-container" autoplay="false" trigger="click">
                <el-carousel-item v-for="item in 5" :key="item">
                    <svg class="heart-svg" @click.stop="toggleFavorite" viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
                        style="display: block; height: 24px; width: 24px; stroke: white; stroke-width: 2; overflow: visible;"
                        v-bind:style="[isFav ? { fill: '#FF385C' } : { fill: '#00000080' }]">
                        <path
                            d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                        </path>
                    </svg>
                    <img :src='getImgUrl(item)' alt=''>
                </el-carousel-item>
            </el-carousel>

        </transition>
        <div v-if="!this.isLoad" class="demo-img">
        </div>
        <section v-if="this.isLoad" class="stay-preview-data">
            <div class="preview-location">
                <span>{{ this.getLocation }}</span>
            </div>
            <div class="preview-rating">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false" style="display: block height: 12px width: 12px fill: currentcolor">
                    <path
                        d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                        fill-rule="evenodd"></path>
                </svg>
                <div class="rating-num">
                    {{ this.getRating }}
                </div>
            </div>
            <div class="preview-distance">{{ this.distanceFromStay }} kilometers away</div>
            <div class="preview-available-dates">{{ this.getRandomDates() }}</div>
            <div class="preview-price"><span>${{ this.currStay.price }}</span> night</div>
        </section>
        <section v-else class="demo-lines">
            <div class="line-a">
                <div class="sub-a1"></div>
                <div class="sub-a2"></div>
            </div>
            <div class="line-b"></div>
            <div class="line-c"></div>
            <div class="line-d"></div>
        </section>
    </section>
</template>

<script>
export default {
    props: {
        currStay: Object,
    },
    data() {
        return {
            TlvCoords: { lat: 32.109333, lang: 34.855499 },
            isLoad: false,
            distanceFromStay: null,
            isFav: false,
        }
    },
    computed: {
        getLocation() {
            const { city, country } = this.currStay.address
            return city + "," + country
        },
        getRating() {
            const { rating } = this.currStay.reviewScores
            return (rating / 20).toFixed(1)
        }
    },
    methods: {
        getDistanceInKm() {
            const { lat, lang } = this.TlvCoords
            const { lat: lat2, lan: lang2 } = this.currStay.address.location
            var R = 6371
            var dLat = (lat2 - lat) * (Math.PI / 180)
            var dLon = (lang2 - lang) * (Math.PI / 180)
            var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)

            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
            var d = R * c
            return d
        },
        getImgUrl(item) {
            const { imgUrls } = this.currStay
            return new URL('../assets/img/stays/' + imgUrls[item - 1], import.meta.url).href
        },
        formatNumber(num) {
            const numberFormatter = Intl.NumberFormat('en-US');
            const formatted = numberFormatter.format(num);
            return formatted;
        },
        showDetails(event) {
            window.open(`/#/stay/${this.currStay._id}`, '_blank');
        },
        toggleFavorite() {
            this.isFav = !this.isFav

            if (this.isFav) {
                this.$store.dispatch({ type: "addWishStay", stay: this.currStay })
            } else {
                this.$store.dispatch({ type: "removeWishStay", stayId: this.currStay._id })
            }
        },
        getRandomDates() {
            return 'jul ' + this.getRandomDay(24) + '- aug ' + this.getRandomDay(2)
        },
        getRandomDay(min) {
            var max = 29
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
    },
    created() {
        var distanceInKm = this.getDistanceInKm().toFixed(0)
        this.distanceFromStay = this.formatNumber(distanceInKm)
        setTimeout(() => this.isLoad = true, 550)

        var id = this.currStay._id
        this.isFav = this.$store.getters.wishListById(id)
    }
}
</script>