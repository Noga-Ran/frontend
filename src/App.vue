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
    // socketService.setup()
  },
  
}
</script>

<template>
  <RouterView />
</template>