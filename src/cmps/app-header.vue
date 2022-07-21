
<template>
    <section class="header-layout">
        <section :class="{ 'header-container-alt': isSearch, 'header-container': !isSearch }">
            <div class="logo-container" :class="{ 'grid-area-logo': isSearch }" @click.prevent="goHome">
                <img src="../../public/favicon.png" alt="">
                skybnb
            </div>
            <filter-cmp @search="isSearch = true" @filter="setFilter" />
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
        goHome() {
            window.open(`/#/`);
        }
    },
    components: {
        filterCmp
    },
    created() { },
}
</script>