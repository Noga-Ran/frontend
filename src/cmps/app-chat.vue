<template>
  <div class="messages-container">
    <app-header></app-header>
    <h1>About Us</h1>
    <p>We like You</p>
    <h2>Lets Chat About {{ topic }}</h2>
    <label>
      <input type="radio" value="Politics" v-model="topic" @change="changeTopic" />
      Politics
    </label>
    <label>
      <input type="radio" value="Love" v-model="topic" @change="changeTopic" />
      Love
    </label>
    <ul>
      <li v-for="(msg, idx) in msgs" :key="idx">
        <span>{{ msg.from }}:</span>{{ msg.txt }}
      </li>
    </ul>
    <hr />
    <form @submit.prevent="sendMsg">
      <input type="text" v-model="msg.txt" placeholder="Your msg" />
      <button>Send</button>
    </form>
  </div>
</template>

<script>
import { socketService, SOCKET_EMIT_SEND_MSG, SOCKET_EVENT_ADD_MSG, SOCKET_EMIT_SET_TOPIC } from '../services/socket.service'
import { userService } from '../services/user-service'
import appHeader from '../cmps/app-header.vue'

export default {
  data() {
    return {
      msg: { from: 'Guest', txt: '' },
      msgs: [],
      topic: 'Love',
      user: null,
    }
  },
  created() {
    // socketService.setup()
    socketService.emit('chat topic', this.topic)
    socketService.on('chat addMsg', this.addMsg)
  },
  destroyed() {
    socketService.off('chat addMsg', this.addMsg)
    // socketService.terminate()
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
      socketService.emit('chat newMsg', this.msg)
      this.msg = { from, txt: '' }
    },
    changeTopic() {
      socketService.emit('chat topic', this.topic)
    }
  },
  created() {
    this.user = userService.getLoggedinUser()
  },
  components: {
    appHeader
  }
}
</script>
