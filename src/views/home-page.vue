
<template>
    <section class="homepage-layout">
        <app-header @filter="setFilter" @showLoginModal="showLoginModal"/>
        <category-filter @filter="setFilter" />
        <stay-list />
        <app-footer :isFixed="false" />
    </section>
</template>

<script>
import appHeader from '../cmps/app-header.vue'
import stayList from '../cmps/stay-list.vue'
import categoryFilter from '../cmps/category-filter.vue'
import appFooter from '../cmps/app-footer.vue'

export default {
    components: {
        appHeader,
        stayList,
        categoryFilter,
        appFooter,
    },

    methods: {
        setFilter(filter, { who } = '',{date} = {start:'',end:''}) {
            var filterBy = Object.assign({}, this.$store.getters.filterBy)
            if (filter.label) {
                if (filter.label === 'remove') {
                    filterBy.label = ''
                } else {
                    filterBy.label = filter.label
                }
            } else {
                filterBy.where = filter?.where || ''
                filterBy.adults = who?.adults || 0
                filterBy.children = who?.children || 0
                filterBy.infants = who?.infants || 0
                filterBy.pets = who?.pets || 0
                filterBy.checkIn = date.start
                filterBy.checkOut = date.end
            }
            this.$store.dispatch({ type: "setFilter", filterBy })
            this.setQuery(filterBy)
        },
        setQuery(query) {
            if (query.where) {
                this.$router.push({ path: `/explore/${query.where}`, query })
            } else {
                this.$router.push({query })
            }
        }
    },
    created() {
        if (this.$route.query && Object.keys(this.$route.query).length !== 0) {
            const {where, checkIn, checkOut,label,adults,children,infants,pets} = this.$route.query
            this.$store.dispatch({ type: "setFilter", filterBy:{where, checkIn, checkOut,label,adults,children,infants,pets}})
        } else {
            this.$store.dispatch({ type: 'loadStays', filter: false })
        }
    }
}
</script>