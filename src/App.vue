<script >
import { RouterLink, RouterView } from 'vue-router'

  export default {
    components: {
        RouterLink,
        RouterView
    },
    created(){
        // this.$store.dispatch({type: 'loadStays'})
        // this.$store.dispatch({ type: "loadWishList"})
        // this.$store.dispatch({ type: "loadTrips"})
        this.$store.dispatch({type:"login" ,cred:{"username":"Noga","password":"1234"}})
    }
}
</script>

<template>
  <RouterView />
</template>