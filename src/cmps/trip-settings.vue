<template>
  <section class="trip-settings-container">
    <div>
      <section class="txt">
        <span class="num">$1,685</span>
        <span class="night"> night</span>
      </section>
      <section class="trip-form">
        <div class="trip-details">
          <div class="trip-checkin">
            <h1>check-in</h1>
            <h2>
              7/24/2022
            </h2>
          </div>
          <div class="trip-checkout">
            <h1>check-out</h1>
            <h2>
              7/29/2022
            </h2>
          </div>
          <div class="trip-guests">
            <h1>guests</h1>
            <h2>
              1 guest
            </h2>
          </div>
        </div>
        <button class="reserve-btn">Reserve</button>
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
          <div class="price-name">$1,685 x 5 nights
          </div>
          <div class="price-amount">$8,426</div>
        </div>
        <div class="service-price">
          <div class="price-name">Service fee
          </div>
          <div class="price-amount">$0</div>
        </div>
      </div>
      <div class="total-price-container">
        <div class="total-price">
          <div>Total</div>
          <div>$8,426</div>
        </div>
      </div>
    </section>
    <div></div>
  </section>
</template>
<script>
export default {
  data() {
    return {}
  },
  created() { },
  methods: {},
  computed: {},
  unmounted() { },
}
</script>
<style>
.trip-settings-container {
  font-family: circular;
  font-family: circular;
  border: 1px solid rgb(221, 221, 221);
  height: 411px;
  border-radius: 12px;
  padding: 24px;
  box-shadow: rgb(0 0 0 / 12%) 0px 6px 16px;
}

.trip-settings-container h1,
.trip-settings-container h2 {
  margin: 0;
  font-weight: inherit;
}

.trip-settings-container h1 {
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
}

.trip-settings-container h2 {
  font-size: 14px;
}

.txt {
  width: fit-content;
  height: fit-content;
  margin: 0 0 24px;
}

.num {
  font-weight: (600, 800);
  font-size: 22px;
}

.night {
  font-size: 16px;
}

.trip-details {
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row: 1fr 1fr;
  border-radius: 8px;
  border: 1px solid rgb(176, 176, 176);
  margin-bottom: 16px;
}

.trip-details>* {
  display: flex;
  flex-direction: column;
  height: 56px;
  width: 100%;
  justify-content: center;
  padding-left: 12px;
}

/* 
.trip-details>*:not(:nth-child(3)) {
  justify-content: center;
} */

.trip-details>*:nth-child(2) {
  margin-left: -1px;
  border-left: 1px solid rgb(176, 176, 176);
}

.trip-details>*:nth-child(3) {
  padding-left: 12px;
  justify-self: start;
  margin-top: -2px;
  border-top: 2px solid rgb(176, 176, 176);
  grid-row: 2;
  grid-column: 1/-1;
}

.reserve-btn {
  letter-spacing: 1px;
  font-weight: bolder;
  width: 100%;
  color: white;
  font-size: 16px;
  height: 48px;
  background-color: #dd0f63;
  border: 0cm;
  border-radius: 8px;
}

.trip-txt-container {
  margin: 0;
  margin-top: 8px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 18px;
  font-weight: 500;
}

.price-details {
  margin-top: 24px;
}

.price-info>* {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price-name {
  text-decoration: underline;
}

.total-price-container {
  margin: 24px 0 0;
  padding: 24px 0 0;
  border-top: 1px solid rgb(221, 221, 221);
}

.total-price {
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.service-price {
  margin-top: 16px;
}
</style>
