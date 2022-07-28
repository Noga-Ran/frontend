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
            <span class="rating-average in-oreder"> {{ getRating }} </span>
          </span>
          <span>&nbsp &middot &nbsp </span>
          <span class="review-count in-order">{{ stay.numOfReviews }} reviews
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

          <div class="trip-guests">
            <h1>guests</h1>
            <div class="filter-who-container" @click.self="showWho = !showWho">
              <span @click.self="showWho = !showWho">{{ guestsAmount }}</span>
            </div>
            <guests-filter @guest="updateGuests" v-if="showWho" :max="currStay.capacity" />
          </div>
        </div>

        <div class="btn-container" :disabled="showWho" @click="saveTrip">
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="cell"></div>
          <div class="content">
            <button class="action-btn">
              <span class="reserve-word-btn">Reserve</span>
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
    <div></div>
  </section>
</template>
<script>
import { h } from 'vue'
import { ElNotification } from 'element-plus'
import guestsFilter from './filter-modal-cmps/guests-filter-modal.vue'

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
    }
  },
  created() {
    this.loggedInUser = this.$store.getters.getUser
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
    open1(msg) {
      ElNotification({
        title: 'congratulation!',
        message: h('i', { style: 'color: #dd0f63' }, msg),
      })
    },

    getStayLen() {
      var date1 = new Date(this.checkIn)
      var date2 = new Date(this.checkOut)
      var time_difference = date2.getTime() - date1.getTime()
      this.stayDayAmount = time_difference / (1000 * 60 * 60 * 24)
      return this.stayDayAmount
    },

    getPrice(cleaningFee = 0) {
      return this.stay.price * this.stayDayAmount + cleaningFee
    },
    getDate(date) {
      var date = new Date(date)
      date = ('' + date).substring(4, 15)
      return date
    },
    saveTrip() {
      var tripDetails = {
        hostId: this.stay.host._id,
        stay: {
          _id: this.stay._id,
          name: this.stay.name,
          price: this.stay.price
        },
        startDate: this.getDate(this.checkIn),
        endDate: this.getDate(this.checkOut),
        createdAt: Date.now(),
        buyer: {
          _id: this.loggedInUser._id,
          fullname: this.loggedInUser.fullname
        },
        totalPrice: this.getPrice(this.stay.cleaningFee),
        guests: this.guests,
        status: "pending"
      }
      console.log('tripDetails: ', tripDetails)
      this.open1('Your trip was successfully reserved')

      this.showModal = true
      this.$store.dispatch({ type: 'addTrip', trip: tripDetails })
      setTimeout(() => {
        this.showModal
      }, 5000)
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
    }
  },
  computed: {
    getRating() {
      const { rating } = this.stay.reviewScores
      this.averageRating = (rating / 20).toFixed(1)
      return this.averageRating
    },
  },
  components: {
    guestsFilter
  },
  unmounted() { },
}
</script>
