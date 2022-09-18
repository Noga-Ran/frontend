<template>
  <section class="trip-settings-container">
    <div>
      <div class="txt-and-review-container">
        <section class="txt">
          <span class="num">${{ stay.price }}</span>
          <span class="night"> night</span>
        </section>

        <section class="reviews-title">
          <span>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
              focusable="false" style="height: 14px; width: 14px; fill: currentcolor">
              <path
                d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                fill-rule="evenodd"></path>
            </svg>
            <span class="rating-average in-oreder"> {{ this.getRating() }} </span>
          </span>
          <span class="trips-dot">&nbsp &middot &nbsp </span>
          <span @click="scrollMeTo('Reviews')" class="review-count in-order">{{ stay.numOfReviews }} reviews
          </span>
        </section>
      </div>

      <section class="trip-form">
        <div class="trip-details">
          <div class="trip-checkin">
            <h1>check-in</h1>
            <h2>
              <Datepicker :full-month-name="true" v-if="!show" @blur="setDate('start')" hideInputIcon
                :autoPosition="false" :enableTimePicker="false" v-model="startDate" range multiCalendars
                placeholder="Add date" :minDate="new Date()" textInput autoApply closeOnScroll />
              <p v-if="show" @click.self="show = !show">{{ getDate(checkIn) }}</p>
            </h2>
          </div>
          <div class="trip-checkout">
            <h1>check-out</h1>
            <h2>
              <Datepicker :full-month-name="true" v-if="!show" @blur="setDate('end')" hideInputIcon
                :autoPosition="false" :enableTimePicker="false" v-model="endDate" range multiCalendars
                placeholder="Add date" :minDate="new Date()" textInput autoApply closeOnScroll />
              <p v-if="show" @click.self="show = !show">{{ getDate(checkOut) }}</p>
            </h2>
          </div>

          <div class="trip-guests" @click="showWho = !showWho">
            <h1>guests</h1>
            <div class="filter-who-container">
              <span v-if="(guests > 1)">{{ guests }} guests</span>
              <span v-else> 1 guest</span>
            </div>
            <svg class="toggle-modal-svg" v-if="!showWho" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" role="presentation" focusable="false"
              style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;">
              <g fill="none">
                <path
                  d="m28 12-11.2928932 11.2928932c-.3905243.3905243-1.0236893.3905243-1.4142136 0l-11.2928932-11.2928932">
                </path>
              </g>
            </svg>
            <svg class="toggle-modal-svg" v-else viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" role="presentation" focusable="false"
              style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;">
              <g fill="none">
                <path
                  d="m4 20 11.2928932-11.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l11.2928932 11.29289322">
                </path>
              </g>
            </svg>
            <guests-filter @guest="updateGuests" v-if="showWho" :max="currStay.capacity" />
          </div>
        </div>

        <div class="btn-container show-order-sum-btn" :disabled="showWho" @click="showOrderSumModal = true">
          <div class="cell" v-for="currCell in 100" :key="currCell"></div>
          <div class="content">
            <button class="action-btn">
              <span class="word-btn">Reserve</span>
            </button>
          </div>
        </div>
      </section>
      <div class="trip-txt-container">
        <div class="trip-txt-container">You won't be charged yet</div>
      </div>
    </div>
    <section class="price-details">
      <div class="price-info">
        <div class="nights-price">
          <div class="price-name">${{ stay.price }} x {{ getStayLen() }}</div>
          <div class="price-amount">${{ getPrice() }}</div>
        </div>
        <div class="service-price">
          <div class="price-name">Service fee</div>
          <div class="price-amount">${{ stay.cleaningFee || 0 }}</div>
        </div>
      </div>
      <div class="total-price-container">
        <div class="total-price">
          <div>Total</div>
          <div>${{ getPrice(stay.cleaningFee) }}</div>
        </div>
      </div>
    </section>
  </section>

  <div class="order-sum-modal">
    <vue-final-modal v-model="showOrderSumModal" classes="modal-container" content-class="modal-content">
      <section class="modal-container">
        <div class="order-sum-top">
          <h1 class="reserve-sum-title">One last step</h1>
          <div>Dear guest, <br>
            In order to complete your reservation, please confirm your trip details.
          </div>
        </div>
        <div class="order-sum-container">
          <div class="bold">Reservation Details</div>
          <div><span class="bold">Trip Dates: <br> </span> {{ getDate(checkIn).slice(0, 6) + '22' }} - {{
          getDate(checkOut).slice(0, 6) + '22'
          }}</div>
          <div><span class="bold">Guests: <br></span> {{ this.query.adults }} adults, {{ this.query.children }} children
          </div>
          <div class="seperate-line"></div>
          <div>Price Details</div>
          <div>${{ stay.price }} X {{ getStayLen() }} nights <span>${{ getPrice() }}</span></div>
          <div>Service fee <span> ${{ stay.cleaningFee }}</span>
          </div>
          <div class="seperate-line"></div>
          <div><span class="">Total</span> ${{ getPrice(stay.cleaningFee) }}</div>
        </div>
        <div class="order-de">
          <img class="order-img" :src="getImgUrl(0)" alt="" />
          <div class="bold">{{ stay.name }}</div>
          <div class="bold">{{ stay.address.city }}, {{ stay.address.country }}</div>
        </div>
        <div class="order-sum-btns">
          <button @click="showOrderSumModal = false">Back</button>
          <div class="btn-container" @click="saveTrip">
            <div class="cell" v-for="currCell in 100" :key="currCell + 'second'"></div>
            <div class="content">
              <button class="action-btn">
                <span class="word-btn">Confirm</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </vue-final-modal>
  </div>
</template>
<script>
// import { ElNotification } from 'element-plus'
import guestsFilter from './filter-modal-cmps/guests-filter-modal.vue'
// import { socketService } from '../services/socket.service'
import { userService } from '../services/user-service'
import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'

export default {
  props: {
    currStay: Object,
  },
  data() {
    return {
      stay: null,
      query: null,
      checkIn: null,
      checkOut: null,
      stayDayAmount: null,
      showModal: false,
      averageRating: null,
      show: true,
      startDate: '',
      endDate: '',
      showWho: false,
      guestsAmount: 'Add guests',
      guests: 1,
      loggedInUser: null,
      showOrderSumModal: false,
    }
  },
  created() {
    this.loggedInUser = userService.getLoggedinUser()
    if (this.loggedInUser) {
      this.$store.dispatch({ type: 'setUser', user: this.loggedInUser })
    }
    this.id = this.$route.params.id
    // this.stay = this.$store.getters.stayById(this.id)
    this.stay = JSON.parse(JSON.stringify(this.currStay))
    this.query = this.$route.query
    this.guests = this.query.adults
      ? +this.query.adults + +this.query.children + +this.query.infants
      : 1
    this.checkIn = this.query.checkIn ? this.query.checkIn : Date.now()
    this.checkOut = this.query.checkOut
      ? this.query.checkOut
      : (Date.now() + 518400000)
  },
  methods: {
    getImgUrl(idx) {
      const { imgUrls } = this.stay
      return new URL('https://res.cloudinary.com/nogacloud/image/upload/v1659274509/stays/' + imgUrls[idx], import.meta.url)
        .href
    },

    getStayLen() {
      var date1 = new Date(this.checkIn)
      var date2 = new Date(this.checkOut)
      var time_difference = date2.getTime() - date1.getTime()
      this.stayDayAmount = time_difference / (1000 * 60 * 60 * 24)
      return this.stayDayAmount.toFixed(0)
    },
    scrollMeTo(refName) {
      this.$emit('scrollMeTo', refName)
    },
    getPrice(cleaningFee = 0) {
      var price = +(this.stay.price * this.stayDayAmount + cleaningFee).toFixed(0)
      return price.toLocaleString()
    },
    getDate(date) {
      var date = new Date(date)
      return date.toLocaleDateString('en-GB')
    },
    saveTrip() {
      var tripDetails = {
        hostId: this.stay.host._id,
        hostName: this.stay.host.fullname,
        hostResponseTime: this.stay.host.responseTime,
        stay: {
          _id: this.stay._id,
          name: this.stay.name,
          price: this.stay.price
        },
        stayAmount: this.stayDayAmount,
        imgUrl: this.stay.imgUrls[0],
        startDate: this.getDate(this.checkIn),
        endDate: this.getDate(this.checkOut),
        createdAt: Date.now(),
        buyer: {
          _id: this.loggedInUser._id || Date.now(),
          fullname: this.loggedInUser.fullname || 'guest',
          buyerImg: this.loggedInUser.imgUrl || 'https://res.cloudinary.com/nogacloud/image/upload/v1659275569/other/demo-profile-img.svg',
        },
        totalPrice: this.getPrice(this.stay.cleaningFee),
        guests: this.guests,
        status: "pending"
      }
      this.$store.dispatch({ type: 'addTrip', trip: tripDetails })
      this.$router.push({ path: `/user` })
    },
    setActive(elElement) {
      var elActiveArea = document.querySelector('.searchbar-selected-filter')
      if (elActiveArea && elActiveArea !== elElement) {
        elActiveArea.classList.remove('searchbar-selected-filter')
      }
      elElement.classList.add('searchbar-selected-filter')
    },
    setDate(isStart) {
      if (isStart === 'start') {
        var dates = Object.values(this.startDate)
      } else {
        var dates = Object.values(this.endDate)
      }
      var newtartDate = new Date(dates[0]).toISOString().slice(0, 16).replace('T', ', ').replaceAll('-', '/')
      newtartDate = newtartDate.slice(0, 10)
      var newEndDate = new Date(dates[1]).toISOString().slice(0, 16).replace('T', ', ').replaceAll('-', '/')
      newEndDate = newEndDate.slice(0, 10)
      this.startDate = ('' + dates[0]).substring(4, 15)
      this.endDate = ('' + dates[1]).substring(4, 15)
      this.checkIn = newtartDate
      this.checkOut = newEndDate
      this.show = true
    },
    updateGuests(guests) {
      if (guests.sum === 0) this.guestsAmount = 'Add Guests'
      else if (guests.sum === 1) this.guestsAmount = guests.sum + ' guest'
      else this.guestsAmount = guests.sum + ' guests'
      this.guests = guests.sum
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
    // redirect(page) {
    //   this.$router.push({ path: `/${page}` })
    // },
  },
  computed: {
  },
  components: {
    guestsFilter,
    VueFinalModal,
    ModalsContainer,
  },
  unmounted() { },
}
</script>
