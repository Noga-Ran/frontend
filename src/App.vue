<script >
import { RouterLink, RouterView } from 'vue-router'

  export default {
    components: {
        RouterLink,
        RouterView
    },
    created(){
        this.$store.dispatch({type: 'loadStays'})
        this.$store.dispatch({ type: "loadWishList"})
        this.$store.dispatch({ type: "loadTrips"})
    }
}
</script>

<template>
  <RouterView />
</template>