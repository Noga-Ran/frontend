<template>
  <section class="sign-up-layout" @click="showSignUpModal($event)" id="blured-bkg-sign-Up">
 <!-- <form @submit.prevent="signup" class="signup-container form-page details-padding"> -->
  <form class="signup-container form-page details-padding">
    <div class="signup-card flex column space-between">
      <div class="signup-fields flex column space-between grow-1">
        <h4>Sign up</h4>
        <hr>
        <h1>Welcome to Skybnb</h1>
        <!-- <label> Full Name </label> -->
        <input class="fullname-input" ref="fullname" v-model="cred.fullname" type="text" placeholder="Full name"/>
        <!-- <label> Username </label> -->
        <input class="username-input" v-model="cred.username" type="text" placeholder="Username" />
        <!-- <label> Password </label> -->
        <input class="password-input" v-model="cred.password" type="password" placeholder="Password" />
      </div>
      <!-- <button class="signup-btn">signup</button> -->

      <div class="btn-container signup-btn" @click="signup">
          <div class="cell" v-for="currCell in 100" :key="currCell"></div>
          <div class="content">
            <!-- v-button -->
            <button class="action-btn">
              <span class="word-btn">Sign up</span>
            </button>
          </div>
        </div>
    
    </div>
    <router-link to="/login" class="move-to-login">Already signed up?</router-link>
  </form>
  </section>
</template>

<script>

export default {
  name: 'signup-page',
  data() {
    return {
      cred: {
        fullname: '',
        username: '',
        password: '',
      },
    };
  },
  methods: {
    async signup() {
     await this.$store.dispatch({type: 'signup', cred: this.cred});
     this.$router.push('/')
    },
       showSignUpModal(ev){
        if(ev.path[0].id == 'blured-bkg-sign-Up'){
          this.$emit('showSignUpModal',false)
        }
        },
  },
    mounted() {
    this.$refs.fullname.focus()
  },
   
};
</script>

<style>

</style>