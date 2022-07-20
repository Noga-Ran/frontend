
<template>
    <section class="homepage-layout">
        <app-header @filter="setFilter" />
        <stay-list/>
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
        setFilter(where){
            let filter = Object.assign({}, this.$store.getters.filterBy)
            filter.where = where
            this.$store.dispatch({ type: "setFilter", filterBy:filter });
        }
    },
    created(){
    }
}
</script>