
<template>
    <section class="homepage-layout">
        <app-header @filter="setFilter" />
        <stay-list @filter="setFilter"/>
    </section>
</template>

<script>
import appHeader from '../cmps/app-header.vue'
import stayList from '../cmps/stay-list.vue'
export default {
    components: {
        appHeader,
        stayList,
    },
    data(){
    },
    methods: {
        setFilter(filter){
            var filterBy = Object.assign({}, this.$store.getters.filterBy)
            if(filter.where){
                filterBy.where = filter.where
            }else{
                filterBy.label = filter.label
            }
            
            this.$store.dispatch({ type: "setFilter", filterBy:filter })
        }
    },
    created(){
    }
}
</script>