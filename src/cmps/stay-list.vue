
<template>
    <section class="demo-list-cont">
        <section class="demo-list">
            <stay-preview :key="currStay" v-for="(currStay,idx) in stays" :currStay="currStay" :wishList="wishListStays" :dates="date"></stay-preview>
        </section>
    </section>
</template>
<script>
import stayPreview from './stay-preview.vue'
export default {
    data() {
        return {
            wishListStays: [],
            dates: {start:this.$store.getters.filterBy.checkIn,end:this.$store.getters.filterBy.checkOut}
        }
    },
    components: {
        stayPreview,
    },
    methods: {
        emitFilter(label){
            this.$emit('filter',{label})
        }
    },
    computed:{
        stays(){return this.$store.getters.stays},
        date(){return {start:this.$store.getters.filterBy.checkIn,end:this.$store.getters.filterBy.checkOut}}
    },
    created(){
        if(this.$route?.params?.where){
            var filterBy = Object.assign({}, this.$store.getters.filterBy)
            filterBy.where = this.$route.params.where
            // this.$store.dispatch({ type: "setFilter", filterBy })
        }
       this.wishListStays= this.$store.getters.getUser
        if(this.wishListStays) {
            this.wishListStays = this.wishListStays.wishlist
        }
    },
    unmounted(){
        this.$store.dispatch({type: "clearStays"})
    }

}
</script>
