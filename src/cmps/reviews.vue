<template>
  <section class="reviews-container details-padding">
    <h2 class="reviews-title">
      <span>
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
          focusable="false" style="height: 14px; width: 14px; fill: currentcolor">
          <path
            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
            fill-rule="evenodd"></path>
        </svg>
        <span class="rating-average"> {{ this.getRating() }} </span>
      </span>
      <span>&nbsp &middot &nbsp </span>
      <span class="review-count">{{ stay.numOfReviews }} reviews </span>
    </h2>
    <section class="stay-reviews-scores">
      <reviewsScores :stay="stay"></reviewsScores>
    </section>
    <ul class="reviews-list">
      <li v-for="review in stayReviewsSliced" :key="review">
        <div class="review-deatails-container">
          <img class="profile-img" :src="review.img" alt="" />
          <div class="review-info">
            <span class="review-name">{{ review.by.fullname }}</span>
            <span class="review-time">{{ formateTime(review.at) }}</span>
          </div>
        </div>
        <div class="reviews-txt-container">
          <!-- <div>{{ review.txt }}</div> -->
          <div>{{ formatedReviewTxt(review.txt) }}</div>
          <div class="show-more-review-container" v-if="this.isLongTxt">
      <!-- v-button -->
            <button class="show-more-review-btn" @click="showReviewsModal = true">
              Show more
            </button>
            <span>></span>
          </div>
        </div>
      </li>
    </ul>

    <div class="reviews-modal">
      <vue-final-modal v-model="showReviewsModal" classes="modal-container" content-class="modal-content">
        <section class="modal-container">
          <button class="modal__close" @click="showReviewsModal = false">
            X
          </button>
          <div class="modal__title">
            <div>
              <h2 class="reviews-title">
                <span>
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false" style="height: 14px; width: 14px; fill: currentcolor">
                    <path
                      d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                      fill-rule="evenodd"></path>
                  </svg>
                  <span class="rating-average"> {{ this.averageRating.toFixed(1) }} </span>
                </span>
                <span>&nbsp &middot &nbsp </span>
                <span class="review-count">{{ stay.numOfReviews }} reviews
                </span>
              </h2>

              <section class="stay-reviews-scores">
                <reviewsScores :stay="stay"></reviewsScores>
              </section>
            </div>
            <ul class="reviews-list">
              <li v-for="review in reviewsCopy" :key="review">
                <div class="review-deatails-container">
                  <img class="profile-img" :src="review.img" alt="" />
                  <div class="review-name-and-time">
                    <span class="review-name">{{ review.by.fullname }}</span>
                    <span class="review-time">{{
                        formateTime(review.at)
                    }}</span>
                  </div>
                </div>
                <div>
                  {{ review.txt }}
                </div>
              </li>
            </ul>
          </div>
        </section>
      </vue-final-modal>
      <!-- v-button -->
      <button class="show-reviews-btn" @click="showReviewsModal = true">
        Show all {{ stay.reviews.length }} reviews
      </button>
    </div>
  </section>
</template>

<script>
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
import reviewsScores from './reviews-scores.vue'

export default {
  components: {
    VueFinalModal,
    ModalsContainer,
    reviewsScores,
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
      isLongTxt: false,
      copyReview: null,
    }
  },
  created() {
    this.reviewsCopy = JSON.parse(JSON.stringify(this.stay.reviews))
    this.reviewsCopy.map(function (review) {
      let randomNum = Math.floor(Math.random() * (99 - 1) + 1)
      var gender = ['men', 'women']
      let randomGender = Math.floor(Math.random() * 2)
      review[
        'img'
      ] = `https://randomuser.me/api/portraits/${gender[randomGender]}/${randomNum}.jpg`
      return review
    })

    this.stayReviewsSliced = this.reviewsCopy.slice(0, 6)
  },
  methods: {
    formateTime(time) {
      let date = new Date(time)
      var year = 2022
      let month = date.toLocaleString('en', { month: 'long' })
      if (month == "August"|| month == "September"|| month == "October"
        || month == "November"|| month == "December") {
        year = 2021
      }
      return month + ' ' + year
    },
    scoreToDisplay(type) {
      return (this.stay.reviewScores[type] / 2).toFixed(1)
    },
    formatedReviewTxt(txt) {
      if (txt.length > 156) {
        this.isLongTxt = true
        return txt.slice(0, 156) + '...'
      } else {
        this.isLongTxt = false
        return txt
      }
    },
    getImgUrl(review) {
      return review.by.imgUrl
    },
    getRating() {
      const { accuracy,
        checkin,
        cleanliness,
        communication,
        location,
        value } = this.stay.reviewScores
      var average = (accuracy + checkin + cleanliness + communication + location + value) / 6
      this.averageRating = average / 2
      return this.averageRating.toFixed(1)
    },
  },
  computed: {
  },
  unmounted() { },
}
</script>

<!-- <style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style> -->
