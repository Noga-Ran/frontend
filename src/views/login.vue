<template>
  <section class="login-layout" @click="showModal($event)" id="blured-bkg">
    <div class="login-container">
      <div class="login-title-cont">
        <div class="login-title">Log in or sign up</div>
        <div class="exit-login-btn" @click.prevent="closeModal">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
            focusable="false"
            style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
            <path d="m6 6 20 20"></path>
            <path d="m26 6-20 20"></path>
          </svg>
        </div>
      </div>
      <section class="login-main-content">
        <div class="login-header">
          Welcome to Skybnb
        </div>
        <div v-if="!isSignUp" class="login-form-cont">
          <input class="login-username" placeholder="Username" v-model="cred.username">
          <div class="form-line"></div>
          <input class="login-password" placeholder="Password" v-model="cred.password" type="password">
        </div>
        <div v-else class="sign-up-form-cont">
          <input class="fullname-input" ref="fullname" v-model="signUpCred.fullname" type="text"
            placeholder="Full name" />
          <div class="form-line"></div>
          <input class="username-input" v-model="signUpCred.username" type="text" placeholder="Username" />
          <div class="form-line"></div>
          <input class="password-input" v-model="signUpCred.password" type="password" placeholder="Password" />
        </div>
        <div class="btn-container login-btn" @click.prevent="loginOrSignUp" :style="[isDisable ? {cursor:'not-allowed'} : '']">
          <div class="cell" v-for="currCell in 100" :key="currCell+'k'"></div>
          <div class="content">
            <button class="action-btn">
              <span class="word-btn">{{isSignUp ? 'Sign up' : 'Log in'}}</span>
            </button>
          </div>
        </div>
        <div class="login-or-line"></div>
        <div class="login-line-text">or
        </div>
        <div class="btn-container login-guest-btn" @click.prevent="guestLogin">
          <div class="cell" v-for="currCell in 100" :key="currCell"></div>
          <div class="content">
            <button class="action-btn">
              <span class="word-btn">Continue as a guest</span>
            </button>
          </div>
        </div>
        <div @click="isSignUp = !isSignUp" :class="[isSignUp ? 'move-to-login' : 'move-to-signup']">
          {{isSignUp ? "Already signed up?" : "Don't have an acount yet? sign up"}}</div>
      </section>
    </div>
    <div class="link-msg" v-bind:style="{opacity,color:'#cc3333',display:'flex'}">
      <img src="https://res.cloudinary.com/nogacloud/image/upload/v1664204204/other/White_X_in_red_background.svg"
        alt="" srcset="">
      Username already taken
    </div>
  </section>
</template>

<script>

export default {
  name: 'login-page',
  data() {
    return {
      cred: {
        username: '',
        password: '',
      },
      signUpCred: {
        fullname: '',
        username: '',
        password: '',
      },
      isSignUp: false,
      isUserExist: false,
      opacity:0
    }
  },
  props: {
    signUpPage: {
      type: Boolean,
    },
  },
  created() {
    if (this.signUpPage) {
      this.isSignUp = this.signUpPage
    }
  },
  methods: {
    async loginOrSignUp() {
      if(this.isDisable) return
      var res = false
      if (this.isSignUp) {
        res = await this.$store.dispatch({ type: 'signup', cred: this.signUpCred })
        this.isUserExist = res
        if(res) this.opacity = 1
        setTimeout(()=>{
          this.isUserExist = false
          this.opacity = 0
        },3000)
      }
      else {
        await this.$store.dispatch({ type: 'login', cred: this.cred });
      }

      if(!res){
        this.$router.push('/')
        this.closeModal()
      }
    },
    showModal(ev) {
      if (ev.path[0].id == 'blured-bkg') {
        this.closeModal()
      }
    },
    closeModal() {
      this.$emit('showLoginModal', false)
    },
    async guestLogin(){
      this.cred.username = 'Guest'
      this.cred.password = 'Guest'
      await this.$store.dispatch({ type: 'login', cred: this.cred })
      this.$router.push('/')
      this.closeModal()
    }
  },
  computed:{
    isDisable(){
      if(this.isSignUp){
        if(this.signUpCred.fullname=== ''|| this.signUpCred.username === '' || this.signUpCred.password === '') return true
        else return false
      }else{
        if(this.cred.username === '' || this.cred.password === '') return true
        else return false
      }
    }
  }
};
</script>