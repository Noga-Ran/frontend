<template>
  <section>
    <h2 class="aminities-title">What this place offers</h2>

    <ul class="amenities-list">
      <li v-for="amenitie in stayAmenitiesSliced" :key="amenitie">
        <img
          class="amenitie-svg"
          src="../assets/img/aminities/Wifi.svg"
          alt=""
        />
        {{ amenitie }}
        <hr />
      </li>
    </ul>
    <!-- <button class="show-amenities-btn" @click="toggleAmenitiesModal">
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
    </section> -->

    <div class="amenitiesModal">
      <vue-final-modal
        v-model="showModal"
        classes="modal-container"
        content-class="modal-content"
      >
        <!-- <span class="modal__title">Hello, vue-final-modal</span> -->
        <section class="modal-container">
          <button class="modal__close" @click="showModal = false">
            <!-- <mdi-close></mdi-close> -->
            X
          </button>
          <div class="modal__title">
            <h2 class="aminities-title">What this place offers</h2>
            <ul class="amenities-list">
              <li v-for="amenitie in stayAmenities" :key="amenities">
                <img
                  class="amenitie-svg"
                  src="../assets/img/aminities/Wifi.svg"
                  alt=""
                />
                {{ amenitie }}
                <hr />
              </li>
            </ul>
          </div>
        </section>
      </vue-final-modal>
      <v-button class="show-amenities-btn" @click="showModal = true">
        Show all {{ stayAmenities.length }} amenities
      </v-button>
    </div>
  </section>
</template>

<script>
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
export default {
  components: {
    VueFinalModal,
    ModalsContainer,
  },

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
      showModal: false,
    }
  },
  created() {
    this.stayAmenitiesSliced = this.stayAmenities.slice(0, 10)
    return this.stayAmenitiesSliced
  },
  methods: {
    // toggleAmenitiesModal() {
    //   this.showAmenitiesModal = !this.showAmenitiesModal
    // },
  },
  computed: {},
  unmounted() {},
}
</script>
