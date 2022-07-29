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
    // this.$store.dispatch({type: 'loadStays'})
    // this.$store.dispatch({ type: "loadWishList"})
    // this.$store.dispatch({ type: "loadTrips"})
    this.login()
    // socketService.setup()
    const user = userService.getLoggedinUser()
    var chatTopic = (user) ? user._id : '62e0e12f44d0ad7220e291a1'
    socketService.emit('chat topic', chatTopic)
  },
  methods: {
    async login(){
      await this.$store.dispatch({ type: "login", cred: { "username": "Noga", "password": "user" } })
    }
  },
}
</script>

<template>
  <RouterView />
</template>