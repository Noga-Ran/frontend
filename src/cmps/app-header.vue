
<template>
    <section class="header-layout">
        <section :class="{ 'header-container-alt': isSearch, 'header-container': !isSearch }">
            <div class="logo-container" :class="{ 'grid-area-logo': isSearch }" @click.prevent="goHome">
                <img src="../../public/favicon.png" alt="">
                <p>skybnb</p>
            </div>
            <filter-cmp @search="isSearch = true" @filter="setFilter" @date="setDate" />
            <div class="header-tools-container" :class="{ 'grid-area-user': isSearch }">
                <div>
                    Become a Host
                </div>
                <div>
                    <img class="globe-img" src="../assets/img/globe.svg" alt="">
                </div>
                <section class="header-user-options">
                    <section>
                        <img class="navburger-svg" src="../assets/img/navburger.svg" alt="">
                    </section>
                    <section class="header-profile-img">
                        <img src="../assets/img/demo-profile-img.jpg" alt="">
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
            isSearch: false
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
            // window.open(`/#/`);
        },
        // handleScroll(event) {
        //     // Any code to be executed when the window is scrolled
        //     this.isUserScrolling = (window.scrollY > 0);
        //     console.log('calling handleScroll');
        // }
    },
    components: {
        filterCmp
    },
    // mounted() {
    //     window.addEventListener('scroll', this.handleDebouncedScroll);
    // },

    // beforeDestroy() {
    //     // I switched the example from `destroyed` to `beforeDestroy`
    //     // to exercise your mind a bit. This lifecycle method works too.
    //     window.removeEventListener('scroll', this.handleDebouncedScroll);
    // },
}
</script>