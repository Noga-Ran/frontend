<template>
  <section>
    <h2 class="aminities-title">What this place offers</h2>
    <ul>
      <li v-for="amenitie in stayAmenitiesSliced" :key="amenitie">
        {{ amenitie }}
      </li>
    </ul>
    <button class="show-amenities-btn" @click="toggleAmenitiesModal">
      Show all {{ stayAmenities.length }} amenities
    </button>
    <section v-if="showAmenitiesModal" class="amenitiesModal main-bg-grey">
      <button class="closeAmenitiesModal" @click="toggleAmenitiesModal">
        X
      </button>
      <h2 class="aminities-title">What this place offers</h2>
      <ul>
        <li v-for="amenitie in stayAmenities" :key="amenities">
          {{ amenitie }}
        </li>
      </ul>
    </section>
  </section>
</template>
<script>
export default {
  props: {
    stayAmenities: {
      type: Object,
    },
  },
  data() {
    return {
      stayAmenitiesSliced: null,
      numOfAmenities: null,
      showAmenitiesModal: false,
    }
  },
  created() {
    this.stayAmenitiesSliced = this.stayAmenities.slice(0, 10)
    return this.stayAmenitiesSliced
  },
  methods: {
    toggleAmenitiesModal() {
      this.showAmenitiesModal = !this.showAmenitiesModal
    },
  },
  computed: {},
  unmounted() {},
}
</script>
