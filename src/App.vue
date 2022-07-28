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
    this.$store.dispatch({ type: "login", cred: { "username": "demoUser", "password": "1234" } })
    // socketService.setup()
    const user = userService.getLoggedinUser()
    var chatTopic = (user._id) ? user._id : '62e0e12f44d0ad7220e291a1'
    socketService.emit('chat topic', chatTopic)
  }
}
</script>

<template>
  <RouterView />
</template>