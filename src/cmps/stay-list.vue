
<template>
    <!-- <category-filter @filter="emitFilter"/> -->
    <section class="demo-list-cont">
        <section class="demo-list">
            <stay-preview :key="idx" v-for="(currStay,idx) in stays" :currStay="currStay"></stay-preview>
        </section>
    </section>
</template>
<script>
import categoryFilter from './category-filter.vue'
import stayPreview from './stay-preview.vue'
export default {
    data() {
        return {
            
        }
    },
    components: {
        categoryFilter,
        stayPreview,
    },
    methods: {
        emitFilter(label){
            this.$emit('filter',{label})
        }
    },
    computed:{
        stays(){return this.$store.getters.stays}
    },
    created(){
        if(this.$route?.params?.where){
            var filterBy = Object.assign({}, this.$store.getters.filterBy)
            filterBy.where = this.$route.params.where
            this.$store.dispatch({ type: "setFilter", filterBy })
        }
    }

}
</script>
