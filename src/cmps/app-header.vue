
<template>
    <section class="header-layout" :class="{ 'position-unset': isDetails }">
        <section :class="{ 'header-container-alt': isSearch, 'header-container': !isSearch }" class="details-padding">
            <div class="logo-container" :class="{ 'grid-area-logo': isSearch }" @click.prevent="redirect">
                <img src="../../public/favicon.png" alt="">
                <p>skybnb</p>
            </div>
            <filter-cmp @closeHeader="closeHeader" @search="setSearch" @filter="setFilter" @date="setDate"
                :isSearch="isSearch" :isDetails="isDetails" />
            <div class="header-tools-container" :class="{ 'grid-area-user': isSearch }">
                <div class="become-a-host" @click="redirect('host')">
                    Become a Host
                </div>
                <div>
                    <img class="globe-img" src="../assets/img/globe.svg" alt="">
                </div>
                <section @click.prevent="showMenu = !showMenu">
                    <div class="header-user-options">
                        <section>
                            <img class="navburger-svg" src="../assets/img/navburger.svg" alt="">
                        </section>
                        <section class="header-profile-img">
                            <img :src="getImg()" alt="">
                        </section>
                    </div>
                    <section class="user-menu" v-if="showMenu">
                        <p @click.stop="goTo('chat')">Messages</p>
                        <p @click.stop="goTo('wishList')">Wish List</p>
                        <p v-if="!user" @click.stop="goTo('login')">Login</p>
                        <p v-else @click.stop="logOut">Log Out</p>
                    </section>
                </section>
            </div>
        </section>
    </section>
</template>


<script>

import filterCmp from './filter.vue'

export default {
    data() {
        return {
            isSearch: false,
            showMenu: false,
            isDetails: false,
        }
    },
    created() {
        if (this.$route.name === 'stay-details') this.isDetails = true
    },
    methods: {
        closeHeader() {
            this.isSearch = false
        },
        setFilter(where, who) {
            this.isSearch = false
            this.$emit('filter', { where }, { who })
        },
        setDate(date) {
            this.$emit('date', date)
        },
        redirect() {
            this.$router.push({path:`/`})
            this.$store.dispatch({type:'clearFilter'})
        },
        setSearch(isSearching) {
            this.isSearch = isSearching
        },
        goTo(link) {
            this.$router.push(`/${link}`)
        },
        wishList() {
            return this.$store.getters.wishList
        },
        logOut(){
            this.$store.dispatch({type:'logout'})
            this.user = false
        },
        getImg(){
            if(this.user && this.user?.imgUrl) {
                return this.user.imgUrl
            }
            else return 'https://res.cloudinary.com/nogacloud/image/upload/v1659275569/other/demo-profile-img.svg'
        }
    },
    computed:{
        user(){ return this.$store.getters.getUser}
    },
    components: {
        filterCmp
    }
}
</script>