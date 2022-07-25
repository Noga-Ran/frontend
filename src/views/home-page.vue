
<template>
    <section class="homepage-layout">
        <app-header @filter="setFilter" @date="setDate"/>
        <category-filter @filter="setFilter"/>
        <stay-list @filter="setFilter"/>
        <app-footer :isFixed="'true'"/>
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
        appFooter
    },
    data(){
    },
    methods: {
        setFilter(filter,{who}=''){
            var filterBy = Object.assign({}, this.$store.getters.filterBy)
            if(filter.label){
                filterBy.label = filter.label
            }else{
                filterBy.where = filter.where
                filterBy.adults = who.adults
                filterBy.children = who.children
                filterBy.infants = who.infants
                filterBy.pets = who.pets
            }
            this.$store.dispatch({ type: "setFilter", filterBy })
            this.setQuery(filterBy)
        },
        setDate(date){
            var filterBy = Object.assign({}, this.$store.getters.filterBy)
            filterBy.checkIn = date.start
            filterBy.checkOut = date.end
            console.log(filterBy);
            this.$store.dispatch({ type: "setFilter", filterBy })

            this.setQuery(filterBy) 
        },
        setQuery(filterBy){
            if(filterBy.where && filterBy.where!==''){
                this.$router.push({path:`/explore/${filterBy.where}`,query: { where:filterBy.where, checkIn:filterBy.checkIn
                ,checkOut:filterBy.checkOut ,label:filterBy.label,adults:filterBy.adults,children:filterBy.children,infants:filterBy.infants,pets:filterBy.pets}})
            }else{
                this.$router.push({path:`/`, query: { where:filterBy.where, checkIn:filterBy.checkIn
                ,checkOut:filterBy.checkOut ,label:filterBy.label,adults:filterBy.adults,children:filterBy.children,infants:filterBy.infants,pets:filterBy.pets } })
            }
        }
    },
    created(){
        if(this.$route.query && this.$route.query.length){
            var filterBy = {where: this.$route.query.where, checkIn:this.$route.query.checkIn ,checkOut:this.$route.query.checkOut , label:this.$route.query.label,
            adults:this.$route.query.adults,children:this.$route.query.children,infants:this.$route.query.infants,pets:this.$route.query.pets}
            this.$store.dispatch({ type: "setFilter", filterBy })
        }
        
    }
}
</script>