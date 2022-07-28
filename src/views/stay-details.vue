<template>
  <section class="stay-details-layout">
    <app-header />
    <section class="stay-details-container">
      <section class="details-layout-top details-padding">
        <section class="stay-name-and-sub">
          <h1 class="stay-name">{{ stay.name }}</h1>
          <section class="stay-sub-title">
            <span>
              <svg class="rating-star" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                role="presentation" focusable="false" style="height: 14px; width: 14px; fill: currentcolor">
                <path
                  d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                  fill-rule="evenodd"></path>
              </svg>
              <span class="rating-average"> {{ this.getRating }} </span>
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
                <svg class="save-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                  role="presentation" focusable="false" style="
                    fill: none;
                    height: 16px;
                    width: 16px;
                    stroke: currentcolor;
                    stroke-width: 2;
                    overflow: visible;
                  ">
                  <g fill="none">
                    <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                    <path d="M16 3v23V3z"></path>
                    <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                  </g>
                </svg>

                <span>Share</span>
              </span>
              <span class="save-stay">
                <svg class="heart-svg" @click.stop="toggleFavorite" viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="
                    display: block;
                    height: 16px;
                    width: 16px;
                    stroke-width: 2;
                    overflow: visible;
                  " v-bind:style="[
                    isFav
                      ? { fill: '#FF385C', stroke: '#FF385C' }
                      : { fill: '#ffffff', stroke: 'currentcolor' },
                  ]">
                  <path
                    d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                  </path>
                </svg>
                <span> Save</span>
              </span>
            </span>
          </section>
        </section>

        <section class="stay-images">
          <div class="stay-img-container" v-for="(img, idx) in stay.imgUrls">
            <img :src="getImgUrl(idx)" alt="" />
          </div>
        </section>
      </section>

      <section class="stay-info details-padding">
        <section class="info-left">
          <div class="details-left-heading">
            <h2 class="stay-type-and-host">
              {{ stay.roomType }} hosted by {{ stay.host.fullname }}
            </h2>
            <div class="stay-contains">
              {{ stay.capacity }} guests &middot {{ stay.bedrooms }} bedrooms
              &middot {{ stay.beds }} beds &middot {{ stay.bathrooms }} baths
            </div>
            <img class="host-img-profile" src="../assets/img/jj.jpg" alt="" />
          </div>
          <section class="stay-beds">
            <div class="beds-heading">Where you'll sleep</div>
            <div class="beds-layout">
              <div class="bed-container">
                <div class="bed">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false" style="
                      display: block;
                      height: 24px;
                      width: 24px;
                      fill: currentcolor;
                    ">
                    <path
                      d="M28 4a2 2 0 0 1 1.995 1.85L30 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232L2 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L4 4zm2 18H2v4h28zm-1.388-6H3.387l-1.333 4h27.891zM28 6H4v8h2v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h2zm-13 4H8v4h7zm9 0h-7v4h7z">
                    </path>
                  </svg>
                  <div class="bedroom-num">bedroom 1</div>
                  <div class="bedroom-type">king size </div>
                </div>
              </div>
              <div class="bed-container">
                <div class="bed">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false" style="
                      display: block;
                      height: 24px;
                      width: 24px;
                      fill: currentcolor;
                    ">
                    <path
                      d="M28 4a2 2 0 0 1 1.995 1.85L30 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232L2 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L4 4zm2 18H2v4h28zm-1.388-6H3.387l-1.333 4h27.891zM28 6H4v8h2v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h2zm-13 4H8v4h7zm9 0h-7v4h7z">
                    </path>
                  </svg>
                  <div class="bedroom-num">bedroom 2</div>
                  <div class="bedroom-type">king size </div>
                </div>
              </div>
              <div class="bed-container">
                <div class="bed">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false" style="
                      display: block;
                      height: 24px;
                      width: 24px;
                      fill: currentcolor;
                    ">
                    <path
                      d="M28 4a2 2 0 0 1 1.995 1.85L30 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232L2 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L4 4zm2 18H2v4h28zm-1.388-6H3.387l-1.333 4h27.891zM28 6H4v8h2v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h2zm-13 4H8v4h7zm9 0h-7v4h7z">
                    </path>
                  </svg>
                  <div class="bedroom-num">bedroom 3</div>
                  <div class="bedroom-type">king size </div>
                </div>
              </div>
            </div>
          </section>
          <section class="stay-amenities">
            <aminities :stayAmenities="stay.amenities"></aminities>
          </section>
          <!-- <section class="stay-summary">
            {{ stay.summary }}
          </section> -->
        </section>
        <section class="info-right">
          <div class="trip-setting-cmp-container">
            <trip-settings :currStay="stay"/>
          </div>
        </section>
      </section>
      <section class="stay-reviews">
        <reviews :stay="stay"></reviews>
      </section>
    </section>
  </section>
  <app-footer :isFixed="'false'" />
</template>

<script>
import tripSettings from '../cmps/trip-settings.vue'
import appHeader from '../cmps/app-header.vue'
import aminities from '../cmps/aminities.vue'
import reviews from '../cmps/reviews.vue'
import appFooter from '../cmps/app-footer.vue'

export default {
  name: 'stay-details',
  components: {
    appHeader,
    tripSettings,
    aminities,
    reviews,
    appFooter
  },
  data() {
    return {
      stay: null,
      averageRating: null,
      isFav: false,
      id: null,
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getStayById(this.id)
    // this.loadPage(id)
  },
  methods: {
    async getStayById(stayId) {
      try {

        this.stay = await this.$store.dispatch({
          type: 'getStayById',
          stayId,
        })
        this.stay = this.stay
        this.isFav = this.$store.getters.wishListById(this.stay._id)
      } catch (err) {
        console.log(err);
      }
    },
    // async loadPage() {
    //   try {

    //     // this.isFav = this.$store.getters.wishListById(this.id)
    //   }
    //   catch {
    //     console.log('err')
    //   }
    getImgUrl(idx) {
      const { imgUrls } = this.stay
      return new URL('../assets/img/stays/' + imgUrls[idx], import.meta.url)
        .href
    },
    toggleFavorite() {
      this.isFav = !this.isFav

      if (this.isFav) {
        this.$store.dispatch({ type: 'addWishStay', stayId: this.stay._id })
      } else {
        this.$store.dispatch({ type: 'removeWishStay', stayId: this.stay._id })
      }
    },
  },
  computed: {
    getRating() {
      const { rating } = this.stay.reviewScores
      this.averageRating = (rating / 20).toFixed(1)
      return this.averageRating
    },
  },
  unmounted() { },
}
</script>
