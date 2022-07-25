
<template>
    <section class="homepage-layout">
        <app-header @filter="setFilter" @date="setDate"/>
        <category-filter @filter="setFilter"/>
        <stay-list @filter="setFilter"/>
    </section>
</template>

<script>
import appHeader from '../cmps/app-header.vue'
import stayList from '../cmps/stay-list.vue'
import categoryFilter from '../cmps/category-filter.vue'

export default {
    components: {
        appHeader,
        stayList,
        categoryFilter,
    },
    data(){
    },
    methods: {
        setFilter(filter){
            var filterBy = Object.assign({}, this.$store.getters.filterBy)
           
            if(filter.label){
                filterBy.label = filter.label
            }else{
                filterBy.where = filter.where
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
            console.log(filterBy);
            if(filterBy.where.length){
                this.$router.push({path:`/explore/${filterBy.where}`,query: { where:filterBy.where, checkIn:filterBy.checkIn ,checkOut:filterBy.checkOut ,who: filterBy.who,label:filterBy.label }})
            }else{
                this.$router.push({path:`/`, query: { where:filterBy.where, checkIn:filterBy.checkIn ,checkOut:filterBy.checkOut ,who: filterBy.who,label:filterBy.label } })
            }
        }
    },
    created(){
        if(this.$route.query){
            var filterBy = {where: this.$route.query.where, checkIn:this.$route.query.checkIn ,checkOut:this.$route.query.checkOut , who:this.$route.query.who, label:this.$route.query.label}
            this.$store.dispatch({ type: "setFilter", filterBy })
        }
        
    }
}
</script>