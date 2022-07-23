<template>
  <section>
    <h2 class="aminities-title">What this place offers</h2>
    <section class="amenities-list-main">
      <div v-for="amenitie in stayAmenitiesSliced" :key="amenitie">
        <img class="amenitie-svg" :src="getImgUrl(amenitie)" alt="" />
        {{ amenitie }}
      </div>
    </section>
    <div class="amenitiesModal">
      <vue-final-modal v-model="showModal" classes="modal-container" content-class="modal-content">
        <section class="modal-container">
          <div class="close-modal">
            <button class="modal__close" @click="showModal = false">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                focusable="false"
                style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;">
                <path d="m6 6 20 20"></path>
                <path d="m26 6-20 20"></path>
              </svg>
            </button>
          </div>
          <div class="modal-amenities-container">
            <div class="modal__title">
              <h2 class="aminities-title">What this place offers</h2>
              <section class="amenities-list">
                <div v-for="amenitie in stayAmenities" :key="amenitie">
                  <div class="modal-amenitie">
                    <img class="amenitie-svg" :src="getImgUrl(amenitie)" alt="" />
                    {{ amenitie }}
                  </div>
                  <hr class="seperating-line" />
                </div>
              </section>
            </div>
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
    getImgUrl(amenitie) {
      var imgUrl = '../assets/img/aminities/' + amenitie + '.svg'
      if (!imgUrl) {
        console.log('imgUrl: ', imgUrl)
      }
      return new URL(imgUrl, import.meta.url)
        .href
    },
  },
  computed: {},
  unmounted() { },
}
</script>
