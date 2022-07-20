<template>
  <section class="stay-details-container">
    <h1 class="stay-name">{{ stay.name }}</h1>
    <div class="about-stay-reviews">
      <span class="review-count">{{ stay.numofReviews }} reviews</span>
    </div>
    <div class="stay-address">
      {{ stay.address.street }} {{ stay.address.city }}
      {{ stay.address.country }}
    </div>
    <div class="stay-images">
      <img class="stay-img-1" src="../assets/img/stays/001.jpeg" alt="" />
    </div>
    <h2 class="stay-type-and-host">
      {{ stay.roomType }} hosted by {{ stay.host.fullname }}
    </h2>
    <div class="stay-contains">
      {{ stay.capacity }} guests - {{ stay.bedrooms }} bedrooms -
      {{ stay.beds }} beds
    </div>
    <hr />
    <section class="stay.amenities">
      <h2>What this place offers</h2>
      {{ stay.amenities }}
    </section>
    <section class="stay-reviews">
      <h3>
        <div class="about-stay-reviews">
          <span class="review-count">{{ stay.numofReviews }} reviews</span>
        </div>
      </h3>
    </section>
  </section>
</template>

<script>
export default {
  name: 'stay-details',
  data() {
    return {
      stay: null,
    }
  },
  created() {
    this.stay = this.$store.getters.stayById('622f337a75c7d36e498aaaf8')
  },
  methods: {},
  computed: {},
  unmounted() {},
}
</script>

<!-- stayById: (state) => (stayId) => {
      return state.stays.find((stay) => stay._id === stayId)
    }, -->
