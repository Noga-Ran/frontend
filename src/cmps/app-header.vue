
<template>
    <section class="header-layout" :class="{ 'position-unset': isDetails }">
        <login v-if="showLogin" @showLoginModal="showLoginModal" :signUpPage="isSignUpPage" />
        <section :class="{ 'header-container-alt': isSearch, 'header-container': !isSearch }" class="details-padding">
            <div class="logo-container" :class="{ 'grid-area-logo': isSearch }" @click.prevent="redirect('')">
                <img src="https://res.cloudinary.com/nogacloud/image/upload/v1659367634/other/favicon.png" alt="">
                <p>skybnb</p>
            </div>
            <filter-cmp @closeHeader="closeHeader" @search="setSearch" @filter="setFilter" @date="setDate"
                :isSearch="isSearch" :isDetails="isDetails" />
            <div class="header-tools-container" :class="{ 'grid-area-user': isSearch }">
                <div class="become-a-host" @click="goTo('host')">
                    Become a Host
                </div>
                <div class="header-i18-btn">
                    <img class="globe-img"
                        src="https://res.cloudinary.com/nogacloud/image/upload/v1659275571/other/globe.svg" alt="">
                </div>
                <section @click.prevent="showMenu = !showMenu">
                    <div class="header-user-options">
                        <section>
                            <img class="navburger-svg"
                                src="https://res.cloudinary.com/nogacloud/image/upload/v1659275569/other/navburger.svg"
                                alt="">
                        </section>
                        <section class="header-profile-img">
                            <img :src="getImg()" alt="">
                        </section>
                    </div>
                    <section class="user-menu" v-if="showMenu">
                        <p class="nav-bar-login" v-if="!user" @click.stop="showLoginModal(true)">Log in</p>
                        <p v-if="!user" @click.stop="showLoginModal(true,true)">Sign up</p>
                        <div v-if="!user" class="nav-breaking-line"></div>
                        <p @click.stop="goTo('wishList')">Wish List</p>
                        <p @click.stop="goTo('user')">Trips</p>
                        <p @click.stop="goTo('host')">Orders</p>
                        <p v-if="user" @click.stop="logOut">Log Out</p>
                    </section>
                </section>
            </div>
        </section>
        <section class="mobile-header">
            <div class="mobile-search-btn">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false" style="display: block; height: 16px; width: 16px; fill: currentcolor;">
                    <path
                        d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
                        opacity=".8"></path>
                </svg>
            </div>
            <div class="mobile-search-txt-container">
                <div class="mobile-search-header">Where to?</div>
                <div class="mobile-search-data">Anywhere <span>·</span> Any week <span>·</span> Add guests</div>
            </div>
            <div class="mobile-search-filter-btn">
                <filter-btn></filter-btn>
            </div>
        </section>
    </section>
</template>


<script>

import filterCmp from './filter.vue'
import login from '../views/login.vue'
import filterBtn from './filter-btn.vue'

export default {
    data() {
        return {
            isSearch: false,
            showMenu: false,
            isDetails: false,
            showLogin: false,
            showSignUp: false,
            isSignUpPage: false,
        }
    },
    created() {
        if (this.$route.name === 'stay-details') this.isDetails = true
    },
    methods: {
        closeHeader() {
            console.log('close');
            this.isSearch = false
        },
        setFilter(where, who, date) {
            this.isSearch = false
            this.$emit('filter', { where }, { who }, { date })
        },
        setDate(date) {
            this.$emit('date', date)
        },
        redirect(page) {
            this.$router.push({ path: `/${page}` })
            this.$store.dispatch({ type: 'clearFilter' })
        },
        setSearch(isSearching) {
            this.isSearch = isSearching
        },
        goTo(page) {
            this.$router.push(`/${page}`)
        },
        wishList() {
            return this.$store.getters.wishList
        },
        logOut() {
            this.$store.dispatch({ type: 'logout' })
            this.user = false
        },
        getImg() {
            if (this.user && this.user?.imgUrl) {
                return this.user.imgUrl
            }
            else return 'https://res.cloudinary.com/nogacloud/image/upload/v1659275569/other/demo-profile-img.svg'
        },
        showLoginModal(boolean, isSignUp = false) {
            this.isSignUpPage = isSignUp
            this.showLogin = boolean
            if (boolean) {
                this.showMenu = !this.showMenu
            }
        }
    },
    computed: {
        user() { return this.$store.getters.getUser }
    },
    components: {
        filterCmp,
        login,
        filterBtn,
    }
}
</script>