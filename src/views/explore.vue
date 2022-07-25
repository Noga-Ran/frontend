<template>
  <app-header></app-header>
  <section>
    {{ city }}
  </section>
  <v-calendar />
</template>

<script>
import appHeader from '../cmps/app-header.vue'
export default {
  data() {
    return {
      city: null,
    }
  },
  created() {
    this.city = this.$route.params.where
  },
  methods: {},
  components: {
    appHeader
  },
  computed: {},
  unmounted() { },
}
</script>
