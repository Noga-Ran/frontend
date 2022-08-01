<script >
import { RouterLink, RouterView } from 'vue-router'
import { userService } from './services/user-service'
// import { socketService } from './services/socket.service'

export default {
  components: {
    RouterLink,
    RouterView
  },
  created() {
    this.loggedInUser = userService.getLoggedinUser()
    if (this.loggedInUser) {
      this.$store.dispatch({ type: 'setUser', user: this.loggedInUser })
    }
  },
  
}
</script>

<template>
  <RouterView />
</template>