<template>
  <div class="messages-container">
    <app-header></app-header>
    <section class="messages">
      <h1>Messages</h1>  
      <div v-if="msgs.length">
        <section v-for="(msg, idx) in msgs" :key="idx">
          <p v-if="msg.from!==user.fullname">{{ msg.from }}:{{ msg.txt }}</p>
          <p v-else>You:{{ msg.txt }}</p>
        </section>
      </div>
      <div v-else>
        <h1>You have no unread messages</h1>
        <p>When you book a trip, messages from your host will show up here.</p>
        <button>Explore Skybnb</button>
      </div>
      <form @submit.prevent="sendMsg">
        <input type="text" v-model="msg.txt" placeholder="Your msg" />
        <button>Send</button>
      </form>
    </section>
  </div>
</template>

<script>
import { socketService, SOCKET_EMIT_SEND_MSG, SOCKET_EVENT_ADD_MSG, SOCKET_EMIT_SET_TOPIC } from '../services/socket.service'
import { userService } from '../services/user-service'
import appHeader from '../cmps/app-header.vue'

export default {
  data() {
    return {
      msg: { from: 'Guest', txt: '',at:'' },
      msgs: [],
      user: null,
    }
  },
  created() {
    // socketService.setup()
    this.user = this.$store.getters.getUser || userService.getLoggedinUser()
    var chatTopic = (this.user._id) ? this.user._id : '62e0e12f44d0ad7220e291a1'
    this.msgs = this.user.msgs || []
    socketService.emit('chat topic',chatTopic)
    socketService.on('chat addMsg', this.addMsg)
  },
  methods: {
    addMsg(msg) {
      this.msgs.push(msg)
    },
    sendMsg() {
      // TODO: next line not needed after connecting to backend
      // this.addMsg(this.msg)
      // setTimeout(()=>this.addMsg({from: 'Dummy', txt: 'Yey'}), 2000)
      const from = (this.user && this.user.fullname) || 'Guest'
      this.msg.from = from
      this.msg.at = Date.now()
      socketService.emit('chat newMsg', this.msg)
      this.msg = { from, txt: '',at:''}
    },
    changeTopic() {
      socketService.emit('chat topic', this.topic)
    }
  },
  components: {
    appHeader
  },
  unmounted() {
      socketService.off('chat addMsg', this.addMsg)
      socketService.off('user-typing')
      this.user = null
  },
}
</script>
