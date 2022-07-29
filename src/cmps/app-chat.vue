<template>
  <div v-if="user" class="messages-container">
    <app-header></app-header>
    <section class="messages">
      <div>
        <h1>Messages</h1>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 16px; width: 16px; fill: rgb(34, 34, 34);">
        <path d="M14 25h4v4h-4zm-4-3h12v-4H10zm-4-7h20v-4H6zM2 4v4h28V4z">
        </path></svg>
      </div>
      <div v-if="msgs.length">
        <section v-for="(msg, idx) in msgs" :key="msg">
          <p v-if="msg.from !== user.fullname">{{ msg.from }}:{{ msg.txt }}</p>
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
      msg: { from: 'Guest', txt: '', at: '' },
      msgs: []
    }
  },
  created() {
    // socketService.setup() 
    socketService.emit('chat topic', this.chatTopic)
    socketService.on('chat addMsg', this.addMsg)
  },
  computed:{
    user(){
      var user =  this.$store.getters.getUser
      this.msgs = user?.msgs || []
      return user},
    chatTopic(){return (this.user?._id) ? this.user._id : '62e0e12f44d0ad7220e291a1'},
    // msgs(){return this.user.msgs || []}
  },
  methods: {
    addMsg(msg) {
      var userCopy = JSON.parse(JSON.stringify(this.user))
      if(userCopy?.msgs){
        userCopy.msgs.push(msg)
      }else{
        userCopy.msgs = [msg]
      }
      this.$store.dispatch({type:'saveUser',user:userCopy})
    },
    sendMsg() {
      // TODO: next line not needed after connecting to backend
      // this.addMsg(this.msg)
      // setTimeout(()=>this.addMsg({from: 'Dummy', txt: 'Yey'}), 2000)
      const from = (this.user && this.user.fullname) || 'Guest'
      this.msg.from = from
      this.msg.at = Date.now()
      socketService.emit('chat newMsg', this.msg)
      this.msg = { from, txt: '', at: '' }
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
