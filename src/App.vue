<script >
import { RouterLink, RouterView } from 'vue-router'

  export default {
    components: {
        RouterLink,
        RouterView
    },
    data(){
    },
    created(){
        this.$store.dispatch({type: 'loadStays'})
    }
}
</script>

<template>
  <RouterView />
</template>