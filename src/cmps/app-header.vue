
<template>
    <section class="header-layout" :class="{ 'position-unset': isDetails }">
        <login v-if="showLogin" @showLoginModal="showLoginModal" />
        <sign-up v-if="showSignUp" @showSignUpModal="showSignUpModal" />
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
                <div>
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
                        <p @click.stop="goTo('wishList')">Wish List</p>
                        <p @click.stop="goTo('user')">Trips</p>
                        <p @click.stop="goTo('host')">Orders</p>
                        <p v-if="!user" @click.stop="showLoginModal">Log in</p>
                        <p v-if="!user" @click.stop="showSignUpModal">Sign up</p>
                        <p v-else @click.stop="logOut">Log Out</p>
                    </section>
                </section>
            </div>
        </section>
    </section>
</template>


<script>

import filterCmp from './filter.vue'
import login from '../views/login.vue'
import signUp from '../views/sign-up.vue'

export default {
    data() {
        return {
            isSearch: false,
            showMenu: false,
            isDetails: false,
            showLogin: false,
            showSignUp: false,
        }
    },
    created() {
        if (this.$route.name === 'stay-details') this.isDetails = true
    },
    methods: {
        closeHeader() {
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
        showLoginModal(boolen = true) {
            this.showLogin = boolen
            if (boolen) {
                this.showMenu = !this.showMenu
            }
        },
        showSignUpModal (boolen = true) {
            this.showSignUp = boolen
            if (boolen) {
                this.showMenu = !this.showMenu
            }
        },
    },
    computed: {
        user() { return this.$store.getters.getUser }
    },
    components: {
        filterCmp,
        login,
        signUp,
    }
}
</script>