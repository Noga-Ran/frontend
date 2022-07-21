<template>
    <div class="header-filter-layout" v-if="!isSearch">
        <div class="header-filter-container" @click.prevent="searching">
            <div class="header-txt-container">Anywhere</div>
            <div class="header-txt-container">Any week</div>
            <div class="header-txt-container">Add guests</div>
            <div class="header-demo-search" @click.prevent="emitFilter">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false"
                    style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                    <g fill="none">
                        <path
                            d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                        </path>
                    </g>
                </svg>
            </div>
        </div>
    </div>
    <div v-else :class="{ 'filter-modal-container': isSearch }">
        <filter-modal @filter="setFilter" @emit="emitFilter" />
    </div>
</template>

<script>
import filterModal from './filter-modal.vue'

export default {

    data() {
        return {
            where: '',
            isSearch: false,
            windowY: 0,
        }
    },
    methods: {
        searching() {
            this.$emit('search')
            this.isSearch = true
        },
        emitFilter() {
            let filterWhere = this.where
            this.isSearch = false
            this.where = ''

            this.$emit('filter', filterWhere)
        },
        setFilter(filter) {
            this.where = filter
        },
        // handleScroll (event) {
        //     event.preventDefault()
        //     console.log(window.scrollTo());
        //     this.isSearch=false
        // }
    },
    computed: {

    },
    components: {
        filterModal
    },
    // created () {
    //     window.addEventListener('scroll', this.handleScroll);
    // },
    // destroyed () {
    //     window.removeEventListener('scroll', this.handleScroll);
    // },

}
</script>