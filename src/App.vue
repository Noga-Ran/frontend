<script >
import { RouterLink, RouterView } from 'vue-router'
import { userService } from './services/user-service'
import { socketService } from './services/socket.service'

export default {
  components: {
    RouterLink,
    RouterView
  },
  created() {
    // this.$store.dispatch({type: 'loadStays',filter:false})
    // this.$store.dispatch({ type: "loadWishList"})
    // this.$store.dispatch({ type: "loadTrips"})
    // this.login()
    // socketService.setup()
    // const user = userService.getLoggedinUser()
    // var chatTopic = (user) ? user._id : '62e3b52c39fea7d494c0e2ac'
    // socketService.emit('chat topic', chatTopic)
  },
  methods: {
    // async login(){
    //   await this.$store.dispatch({ type: "login", cred: { "username": "24800102", "password": "Kevin" } })
    // }
  },
}
</script>

<template>
  <RouterView />
</template>