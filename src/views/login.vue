<template>
<app-header></app-header>
<!-- <form @submit.prevent="login" class="login-container form-page"> -->
<form class="login-container form-page">
    <div class="login-card flex column space-between">
      <div class="login-fields flex column space-between grow-1">
        <h4>Log in</h4>
        <hr>
        <h1>Welcome to Skybnb</h1>
        <!-- <label> Username </label> -->
        <input class="username-input" ref="username" v-model="cred.username" type="text" placeholder="Username" />
        <!-- <label> Password </label> -->
        <input class="password-input" v-model="cred.password" type="password" placeholder="Password"/>
      </div>
      <!-- <button class="login-btn">login</button> -->

<div class="btn-container login-btn" @click="login">
          <div class="cell" v-for="currCell in 100" :key="currCell"></div>
          <div class="content">
            <!-- v-button -->
            <button class="action-btn">
              <span class="word-btn">Log in</span>
            </button>
          </div>
        </div>
    </div>
    <div class="hr-or">or</div>

   

    <!-- <router-link to="/signup" class="sec-btn"> -->
      <div class="btn-container login-guest-btn">
          <div class="cell" v-for="currCell in 100" :key="currCell"></div>
          <div class="content">
            <!-- v-button -->
            <button class="action-btn">
              <span class="word-btn">Log in as a guest</span>
            </button>
          </div>
        </div>
        <!-- </router-link> -->
  </form>
   <router-link to="/signup" class="move-to-signup"
      >Don't have an acount yet? sign up</router-link>
</template>

<script>
import appHeader from '../cmps/app-header.vue'
import appFooter from '../cmps/app-footer.vue'

  export default {
    name: 'login-page',
    data() {
      return {
        cred: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      async login() {
        await this.$store.dispatch({type: 'login', cred: this.cred});
        // socketService.emit("set-user-socket", this.$store.getters.getUser._id)
        this.$router.push('/')
      },
    },
    mounted() {
      this.$refs.username.focus();
    },
    components:{
      appHeader,
      appFooter
    }
  };
</script>

<style></style>
