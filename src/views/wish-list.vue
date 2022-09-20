<template>
    <app-header></app-header>
    <div v-if="wishList && displayWishStays.length" class="wish-list-container">
        <h1>Wishlist</h1>
        <div class="wish-container" v-for="stay in displayWishStays" :key="stay._id">
            <section>
                <el-carousel trigger="click" :autoplay="false">
                    <el-carousel-item v-for="item in 5" :key="item">
                        <svg @click.stop="removeStay(stay._id)" class="mobile-fav" name="favBtn" viewBox="0 0 32 32"
                            xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
                            style="display: block; height: 24px; width: 24px; stroke: white; stroke-width: 2; overflow: visible; fill: rgb(255, 56, 92);">
                            <path
                                d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                            </path>
                        </svg>
                        <img :src='getImgUrl(stay, item)' alt=''>
                    </el-carousel-item>
                </el-carousel>
            </section>
            <section class="wish-details-container">
                <section class="wish-name">
                    <div>
                        <p>{{ stay.propertyType }} in {{ stay.address.city }}</p>
                        <p>{{ stay.name }}</p>
                    </div>
                    <svg @click.stop="removeStay(stay._id)" name="favBtn" class="desktop-fav" viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
                        style="display: block; height: 24px; width: 24px; stroke: white; stroke-width: 2; overflow: visible; fill: rgb(255, 56, 92);">
                        <path
                            d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                        </path>
                    </svg>
                </section>
                <div class="wish-sep"></div>
                <section class="about-wish">
                    <p>{{ stay.capacity }} guests</p>
                    <span>&nbsp·&nbsp</span>
                    <p>{{ this.checkMulti(stay.bedrooms, 'bedroom') }}</p>
                    <span>&nbsp·&nbsp</span>
                    <p>{{ this.checkMulti(stay.beds, 'bed') }}</p>
                    <span>&nbsp·&nbsp</span>
                    <p>{{ this.checkMulti(stay.bathrooms, 'bath') }}</p>
                </section>
                <section class="wish-price-rating">
                    <div>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            role="presentation" focusable="false"
                            style="display: block; height: 12px; width: 12px; fill: #222222">
                            <path
                                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                fill-rule="evenodd"></path>
                        </svg>
                        <div class="rating-num">
                            <p>{{ this.getRating(stay) }}</p>
                            <span>&nbsp;({{ getNumRev(stay) }})</span>
                        </div>
                    </div>
                    <div class="wish-price">
                        <p>${{ stay.price }} </p>
                        <span>&nbsp;night</span>
                    </div>
                </section>
            </section>
            <section class="wish-details-container-mobile">
                <section class="wish-rating">
                    <div>
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            role="presentation" focusable="false"
                            style="display: block; height: 14px; width: 14px; fill: #222222">
                            <path
                                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                                fill-rule="evenodd"></path>
                        </svg>
                        <div class="rating-num">
                            <p>{{ this.getRating(stay) }}</p>
                            <span>&nbsp;({{ stay.numOfReviews }})</span>
                        </div>
                    </div>
                </section>
                <section class="wish-name">
                    <div>
                        <p>{{ stay.propertyType }} &middot {{ stay.address.city }}</p>
                        <p>{{ stay.name }}</p>
                    </div>
                </section>
                <section>
                    <div class="wish-price-mobile">
                        <p>${{ stay.price }} <span>night</span></p>
                    </div>
                </section>
            </section>
        </div>
    </div>
    <div class="alt-wish-conatiner" v-else>
        <h1>Nothing saved yet</h1>
        <p>As you search, tap the heart icon to save your favorite places to stay or things to do to a wishlist.</p>
        <router-link to="/">start exploring</router-link>
    </div>
    <app-footer :isFixed="true"></app-footer>
</template>
<script>
import appHeader from '../cmps/app-header.vue'
import appFooter from '../cmps/app-footer.vue'

export default {
    data() {
        return {
            wishListIds: this.user?.wishlist || [],
            displayWishStays: [],
        }
    },
    methods: {
        getImgUrl(stay, item) {
            const { imgUrls } = stay
            return new URL('https://res.cloudinary.com/nogacloud/image/upload/stays/' + imgUrls[item - 1], import.meta.url).href
        },
        getRating(stay) {
            const { rating } = stay.reviewScores
            return (rating / 20).toFixed(1)
        },
        getNumRev(stay) {
            var length = stay.numOfReviews
            if (length === 0 || !length) return 'New'
            if (length === 1) return '1 review'
            return length + ' reviews'
        },
        removeStay(stayId) {
            this.displayWishStays = this.displayWishStays.filter(wish => wish._id !== stayId)
            this.$store.dispatch({ type: "removeWishStay", stayId })
        },
        showDetails(stayId) {
            window.open(`/#/stay/${stayId}`, '_blank')
        },
        checkMulti(stayParam, param) {
            if (stayParam === 1) return stayParam + ' ' + param
            return stayParam + ' ' + param + 's'
        },
    },
    components: {
        appHeader,
        appFooter
    },
    computed: {
        user() {
            var user = this.$store.getters.getUser
            return user
        },
        async wishList() {
            var wishStays = []
            if(!this.user && !this.user?.wishlist) return []
            for (var wish in this.user.wishlist) {
                var stay = await this.$store.dispatch({ type: 'getStayById', stayId: this.user.wishlist[wish]})
                wishStays.push(stay)
            }
            this.displayWishStays = wishStays
        }
    },
}
</script>