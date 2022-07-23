<template>
  <section class="stay-details-layout">
    <app-header />
    <section class="stay-details-container">
      <section class="details-layout-top">
        <h1 class="stay-name">{{ stay.name }}</h1>
        <section class="stay-sub-title">
          <span>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="height: 14px; width: 14px; fill: currentcolor"
            >
              <path
                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                fill-rule="evenodd"
              ></path>
            </svg>
            <span class="rating-average"> {{ getRating }} </span>
          </span>
          <span>&nbsp &middot &nbsp </span>
          <span class="review-count">{{ stay.numOfReviews }} reviews </span>
          <span class="separating-dote"> &nbsp.&nbsp </span>
          <span class="stay-address">
            {{ stay.address.city }},
            {{ stay.address.country }}
          </span>
          <span class="share-save-actions">
            <span class="share-stay">
              <svg
                class="save-svg"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  fill: none;
                  height: 16px;
                  width: 16px;
                  stroke: currentcolor;
                  stroke-width: 2;
                  overflow: visible;
                "
              >
                <g fill="none">
                  <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                  <path d="M16 3v23V3z"></path>
                  <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                </g>
              </svg>

              <span>Share</span>
            </span>
            <span class="save-stay">
              <svg
                class="heart-svg"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style="
                  fill: none;
                  height: 16px;
                  width: 16px;
                  stroke: currentcolor;
                  stroke-width: 2;
                  overflow: visible;
                "
              >
                <path
                  d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"
                ></path>
              </svg>
              <span> Save</span>
            </span>
          </span>
        </section>

        <section class="stay-images">
          <div class="stay-img-container" v-for="(img, idx) in stay.imgUrls">
            <img :src="getImgUrl(idx)" alt="" />
          </div>
        </section>
      </section>

      <section class="stay-info">
        <section class="info-left">
          <h2 class="stay-type-and-host">
            {{ stay.roomType }} hosted by {{ stay.host.fullname }}
          </h2>
          <div class="stay-contains">
            {{ stay.capacity }} guests &middot {{ stay.bedrooms }} bedrooms
            &middot

            {{ stay.beds }} beds
          </div>
          <hr />
          <section class="stay-amenities">
            <aminities :stayAmenities="stay.amenities"></aminities>
          </section>
        </section>
        <section class="info-right">
          <div class="trip-setting-cmp-container">
            <trip-settings />
          </div>
        </section>
      </section>
      <section class="stay-reviews">
        <reviews :stay="stay"></reviews>
      </section>
    </section>
  </section>
</template>

<script>
import tripSettings from '../cmps/trip-settings.vue'
import appHeader from '../cmps/app-header.vue'
import aminities from '../cmps/aminities.vue'
import reviews from '../cmps/reviews.vue'

export default {
  name: 'stay-details',
  components: {
    appHeader,
    tripSettings,
    aminities,
    reviews,
  },
  data() {
    return {
      stay: null,
      averageRating: null,
    }
  },
  created() {
    const id = this.$route.params.id
    this.stay = this.$store.getters.stayById(id)
  },
  methods: {
    getImgUrl(idx) {
      const { imgUrls } = this.stay
      return new URL('../assets/img/stays/' + imgUrls[idx], import.meta.url)
        .href
    },
  },
  computed: {
    getRating() {
      const { rating } = this.stay.reviewScores
      this.averageRating = (rating / 20).toFixed(1)
      return this.averageRating
    },
  },
  unmounted() {},
}
</script>
<style>
.stay-info {
  padding: 0 max(80px, 12vw);
  display: grid;
  grid-template-columns: 3fr 2fr;
}

.details-layout-top {
  padding: 0 max(80px, 12vw);
}

.trip-setting-cmp-container {
  z-index: 1;
  top: 80px;
  position: relative;
  width: 67%;
  margin-left: 8.333333333333332%;
  margin-right: 0%;
  padding-bottom: 48px;
}
</style>
