<template>
  <section class="reviews-container">
    <h2 class="reviews-title">
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
    </h2>

    <ul class="reviews-list">
      <li v-for="review in stayReviewsSliced" :key="review">
        <div class="review-deatails-container">
          <img
            class="profile-img"
            src="../assets/img/demo-profile-img.jpg"
            alt=""
          />
          <span class="review-name">{{ review.by.fullname }}</span>
          <span class="review-time">{{ formateTime(review.at) }}</span>
        </div>
        <div class="reviews-txt-container">
          <div>{{ review.txt }}</div>
        </div>
      </li>
    </ul>

    <div class="reviewsModal">
      <vue-final-modal
        v-model="showReviewsModal"
        classes="modal-container"
        content-class="modal-content"
      >
        <section class="modal-container">
          <button class="modal__close" @click="showReviewsModal = false">
            X
          </button>
          <div class="modal__title">
            <h2 class="reviews-title">
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
            </h2>

            <ul class="reviews-list">
              <li v-for="review in stay.reviews" :key="review">
                <div class="review-deatails-container">
                  <img
                    class="profile-img"
                    src="../assets/img/demo-profile-img.jpg"
                    alt=""
                  />
                  <span class="review-name">{{ review.by.fullname }}</span>
                  <span class="review-time">{{ formateTime(review.at) }}</span>
                </div>
                <div>
                  {{ review.txt }}
                </div>
              </li>
            </ul>
          </div>
        </section>
      </vue-final-modal>
      <v-button class="show-reviews-btn" @click="showReviewsModal = true">
        Show all {{ stay.reviews.length }} reviews
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
    stay: {
      type: Object,
    },
    // averageRating: {
    //   type: Number,
    // },
  },
  data() {
    return {
      averageRating: null,
      stayReviewsSliced: null,
      showReviewsModal: false,
    }
  },
  created() {
    this.stayReviewsSliced = this.stay.reviews.slice(0, 6)
    return this.stayReviewsSliced
  },
  methods: {
    formateTime(time) {
      let date = new Date(time)
      let year = date.getFullYear()
      let month = date.toLocaleString('en', { month: 'long' })
      return month + ' ' + year
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
