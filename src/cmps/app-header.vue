
<template>
    <section class="header-layout">
        <section :class="{ 'header-container-alt': isSearch, 'header-container': !isSearch }" class="details-padding">
            <div class="logo-container" :class="{ 'grid-area-logo': isSearch }" @click.prevent="goHome">
                <img src="../../public/favicon.png" alt="">
                <p>skybnb</p>
            </div>
            <filter-cmp @search="setSearch" @filter="setFilter" @date="setDate" :isSearch="isSearch" />
            <div class="header-tools-container" :class="{ 'grid-area-user': isSearch }">
                <div class="become-a-host">
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
                        <img src="../assets/img/demo-profile-img.jpg" alt="">
                    </section>
                </div>
                <section class="user-menu" v-if="showMenu">
                    <p @click.stop="goToWishList">Wish List</p>
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
            showMenu: false
        }
    },
    methods: {
        setFilter(where) {
            this.isSearch = false
            this.$emit('filter', { where })
        },
        setDate(date) {
            this.$emit('date', date)
        },
        goHome() {
            this.$router.push(`/`)
        },
        setSearch(isSearching) {
            this.isSearch = isSearching
        },
        goToWishList() {
            window.open(`/#/wishList`, '_blank')
        }
    },
    components: {
        filterCmp
    },
}
</script>