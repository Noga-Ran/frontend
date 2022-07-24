<template>
  <section class="trip-settings-container">
    <div>
      <section class="txt">
        <span class="num">${{ stay.price }}</span>
        <span class="night"> night</span>
      </section>
      <section class="trip-form">
        <div class="trip-details">
          <div class="trip-checkin">
            <h1>check-in</h1>
            <h2>
              {{ getDate(checkIn) }}
            </h2>
          </div>
          <div class="trip-checkout">
            <h1>check-out</h1>
            <h2>
              {{ getDate(checkOut) }}
            </h2>
          </div>
          <div class="trip-guests">
            <h1>guests</h1>
            <h2>
              {{ guests }} guests
            </h2>
          </div>
        </div>
        <button class="reserve-btn" @click="saveTrip">Reserve</button>
      </section>
      <div class="trip-txt-container">
        <div class="trip-txt-container">
          You won't be charged yet
        </div>
      </div>
    </div>
    <section class="price-details">
      <div class="price-info">
        <div class="nights-price">
          <div class="price-name">${{ stay.price }} x {{ getStayLen() }}
          </div>
          <div class="price-amount">${{ getPrice() }}</div>
        </div>
        <div class="service-price">
          <div class="price-name">Service fee
          </div>
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


export default {
  data() {
    return {
      stay: null,
      query: null,
      checkIn: new Date(new Date().setDate(new Date().getDate() - 6)),
      checkOut: Date.now(),
      stayDayAmount: null,
      guests: 2,
      showModal: false
    }
  },
  created() {
    this.id = this.$route.params.id
    this.stay = this.$store.getters.stayById(this.id)
    this.query = this.$route.query
  },
  methods: {
    open1(msg) {
      ElNotification({
        title: 'congratulation!',
        message: h('i', { style: 'color: #dd0f63' }, msg),
      })
    },
    getStayLen() {
      return this.miliToDays(this.checkOut - this.checkIn)
    },
    miliToDays(timeStap) {
      this.stayDayAmount = parseInt(timeStap / 24 / 60 / 60 / 1000)
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
      this.open1("Your trip was successfully reserved")
      var tripDetails = {
        stay: this.stay._id,
        checkIn: this.getDate(this.checkIn),
        checkOut: this.getDate(this.checkOut),
        price: this.getPrice(this.stay.cleaningFee),
        guests: this.guests
      }
      this.showModal = true
      this.$store.dispatch({ type: "addTrip", trip: tripDetails })
      setTimeout(() => { this.showModal }, 5000)
    }
  },
  computed: {},
  unmounted() { },
}
</script>
