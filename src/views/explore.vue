<template>
  <section>
    {{city}}
  </section>
</template>
<script>
export default {
  data() {
    return {
      city:null,
    }
  },
  created() {
    this.city = this.$route.params.where
  },
  methods: {},
  computed: {},
  unmounted() {},
}
</script>
