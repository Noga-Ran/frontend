<template>
  <div v-if="user" class="messages-container">
    <app-header></app-header>
    <div class="chat-container">
      <section class="user-messages">
        <header>
          <h1>Messages</h1>
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
            focusable="false" style="display: block; height: 16px; width: 16px; fill: rgb(34, 34, 34);">
            <path d="M14 25h4v4h-4zm-4-3h12v-4H10zm-4-7h20v-4H6zM2 4v4h28V4z">
            </path>
          </svg>
        </header>
        <div v-if="msgs.length">
          <section class="users-chat" v-for="(msg, idx) in msgs" :key="msg">
            <p v-if="msg.from !== user.fullname">{{ msg.from }}</p>
            <p class="you-msg" v-else>You</p>
          </section>
        </div>
        <div v-else>
          <h1>You have no unread messages</h1>
          <p>When you book a trip, messages from your host will show up here.</p>
          <button>Explore Skybnb</button>
        </div>
      </section>
      <section class="user-chat">
        <header>
          <h1>{{ userChat }}</h1>
          <p>Response time: 1 hour</p>
        </header>
        <div v-if="userMsgs.length">
        <section>
          <section class="users-chats" v-for="(msg, idx) in userMsgs" :key="idx">
              <p>{{ msg.from }}</p>
              <p>{{ msg.at }}</p>
              <p>{{ msg.txt }}</p>
          </section>
        </section>
        <form @submit.prevent="sendMsg">
          <textarea class="msg-input" type="text" v-model="msg.txt" placeholder="Type a message"></textarea>
          <button><svg role="presentation" aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="height: 24px; width: 24px; display: block; fill: currentcolor;"><circle cx="12" cy="12" r="12"></circle><g clip-path="url(#clipeSendIcon19)"><path transform="scale(1)" fill-rule="evenodd" clip-rule="evenodd" d="M11.2929 6.29289C11.6834 5.90237 12.3166 5.90237 12.7071 6.29289L16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071C16.3166 12.0976 15.6834 12.0976 15.2929 11.7071L13 9.41421V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V9.41421L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929L11.2929 6.29289Z" fill="white"></path></g><defs><clipPath id="clipeSendIcon19"><rect width="12" height="12" fill="white" transform="translate(6 6)"></rect></clipPath></defs></svg></button>
        </form>
        </div>
      </section>
      <section class="user-stay">
        <header>
          <h1>Details</h1>
        </header>
      </section>
    </div>
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
      msgs: [],
      userMsgs: [{ from: 'Guest', txt: 'hello', at: Date.now() }, { from: 'Guest', txt: 'hey??', at: Date.now() }, { from: 'Guest', txt: '?', at: Date.now() }],
      userChat: 'UserName'
    }
  },
  created() {
    socketService.emit('chat topic', this.chatTopic)
    socketService.on('chat addMsg', this.addMsg)
  },
  computed: {
    user() {
      var user = this.$store.getters.getUser
      this.msgs = user?.msgs || []
      return user
    },
    chatTopic() { return (this.user?._id) ? this.user._id : '62e3b52c39fea7d494c0e2ac' },
  },
  methods: {
    addMsg(msg) {
      var userCopy = JSON.parse(JSON.stringify(this.user))
      if (userCopy?.msgs) {
        userCopy.msgs.push(msg)
      } else {
        userCopy.msgs = [msg]
      }
      this.$store.dispatch({ type: 'saveUser', user: userCopy })
    },
    sendMsg() {
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
