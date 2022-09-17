<template>
  <section class="login-layout" @click="showLoginModal($event)" id="blured-bkg">
    <div class="login-container">
      <div class="login-title-cont">
        <div class="login-title">Log in or sign up</div>
        <div class="exit-login-btn" @click="closeLoginModal">
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
        <div class="btn-container login-btn" @click="loginOrSignUp">
          <div class="cell" v-for="currCell in 100" :key="currCell+'k'"></div>
          <div class="content">
            <button class="action-btn">
              <span class="word-btn">{{isSignUp ? 'Sign up' : 'Log in'}}</span>
            </button>
          </div>
        </div>
        <div v-if="!isSignUp" class="login-or-line"></div>
        <div v-if="!isSignUp" class="login-line-text">or
        </div>
        <div v-if="!isSignUp" class="btn-container login-guest-btn">
          <div class="cell" v-for="currCell in 100" :key="currCell"></div>
          <div class="content">
            <button class="action-btn">
              <span class="word-btn">Continue as a guest</span>
            </button>
          </div>
        </div>
        <div v-if="!isSignUp" @click="isSignUp = true" class="move-to-signup">Don't have an acount yet? sign up</div>
        <div v-else @click="isSignUp = false" class="move-to-login">Already signed up?</div>
      </section>
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
    };
  },
  props: {
    signUpPage: {
      type: Boolean,
    },
  },
  created() {
    console.log('this.signUpPage: ',this.signUpPage)
    if (this.signUpPage) {
      this.isSignUp = this.signUpPage
    }
  },
  methods: {
    async loginOrSignUp() {
      if (this.isSignUp) {
        await this.$store.dispatch({ type: 'signup', cred: this.signUpCred });
      }
      else {
        await this.$store.dispatch({ type: 'login', cred: this.cred });
      }
      this.$router.push('/')
    },
    showLoginModal(ev) {
      if (ev.path[0].id == 'blured-bkg') {
        this.closeLoginModal()
      }
    },
    closeLoginModal() {
      this.$emit('showLoginModal', false)
    }
  },
};
</script>