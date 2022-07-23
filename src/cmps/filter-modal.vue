<template>
  <form class="form-modal-container">
    <div class="search-opts">
      <button>
        <p>Stays</p>
      </button>
      <button>
        <p>Experiencesy</p>
      </button>
      <button>
        <p>Online Experiences</p>
      </button>
    </div>
    <div class="modal-filter-choices-layout">
      <div class="filter-modal-where-container">
        <p>Where</p>
        <input
          v-model="where"
          @input="emit"
          type="text"
          name="query"
          placeholder="Search destinations"
          aria-describedby="bigsearch-query-location-description"
          aria-autocomplete="none"
          autocomplete="off"
          autocorrect="off"
        />
      </div>
      <div class="filter-seperator"></div>
      <div class="check-in-out-container">
        <div class="check-in-container" role="button">
          <p>Check in</p>
          <!-- <span>Add dates</span> -->
          <Datepicker
            v-if="!show"
            @blur="setDate('start')"
            hideInputIcon
            :autoPosition="false"
            :enableTimePicker="false"
            v-model="startDate"
            range
            multiCalendars
            placeholder="Add dates"
            :minDate="new Date()"
            textInput
            autoApply
            :closeOnAutoApply="false"
          />
          <p
            v-if="show"
            @click=";(endDate = ''), (startDate = ''), (show = false)"
          >
            {{ startDate }}
          </p>
        </div>
        <div class="filter-seperator"></div>
        <div class="check-out-container">
          <p>Check out</p>
          <Datepicker
            v-if="!show"
            @blur="setDate('end')"
            hideInputIcon
            :autoPosition="false"
            :enableTimePicker="false"
            v-model="endDate"
            range
            multiCalendars
            placeholder="Add dates"
            :minDate="new Date()"
            textInput
            autoApply
            :closeOnAutoApply="false"
          />
          <p
            v-if="show"
            @click=";(endDate = ''), (startDate = ''), (show = false)"
          >
            {{ endDate }}
          </p>
        </div>
      </div>
      <div class="filter-seperator"></div>
      <div class="filter-who-container" @click.self="showWho = !showWho">
        <p>Who</p>
        <span>Add guests</span>
        <div
          v-if="showWho"
          class="guests-modal"
          @click.self="showWho = !showWho"
        >
          <div class="modal-g-container">
            <div class="adults-filter-container">
              <div>
                <span>Adults</span>
                <span>Ages 13 or above</span>
              </div>
              <div>
                <button
                  type="button"
                  class="g-modal-buttons"
                  :disabled="guests.adults == 0"
                >
                  <span class="material-icons-sharp">-</span>
                </button>
                <span class="guests-num">{{ guests.adults }}</span>
                <button type="button" class="g-modal-buttons">
                  <span class="material-icons-sharp">+</span>
                </button>
              </div>
            </div>
            <div class="children-filter-container">
              <div>
                <span>Children</span>
                <span>Ages 2–12</span>
              </div>
              <div>
                <button
                  type="button"
                  class="g-modal-buttons"
                  :disabled="guests.children == 0"
                >
                  <span class="material-icons-sharp">-</span>
                </button>
                <span class="guests-num">{{ guests.children }}</span>
                <button type="button" class="g-modal-buttons">
                  <span class="material-icons-sharp">+</span>
                </button>
              </div>
            </div>
            <div class="babies-filter-container">
              <div>
                <span>Infants</span>
                <span>Under 2</span>
              </div>
              <div>
                <button
                  type="button"
                  class="g-modal-buttons"
                  :disabled="guests.infants == 0"
                >
                  <span class="material-icons-sharp">-</span>
                </button>
                <span class="guests-num">{{ guests.infants }}</span>
                <button type="button" class="g-modal-buttons">
                  <span class="material-icons-sharp">+</span>
                </button>
              </div>
            </div>
            <div class="pets-filter-container">
              <div>
                <span>Pets</span>
                <span>(not counting service animals)</span>
              </div>
              <div>
                <button
                  type="button"
                  class="g-modal-buttons"
                  :disabled="guests.pets == 0"
                >
                  <span class="material-icons-sharp">-</span>
                </button>
                <span class="guests-num">{{ guests.pets }}</span>
                <button type="button" class="g-modal-buttons">
                  <span class="material-icons-sharp">+</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="search-container">
        <button @click.prevent="setFilter">
          <div class="modal-search">
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style="
                display: block;
                fill: none;
                height: 12px;
                width: 12px;
                stroke: currentcolor;
                stroke-width: 5.33333;
                overflow: visible;
              "
            >
              <g fill="none">
                <path
                  d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"
                ></path>
              </g>
            </svg>
          </div>
          <p>Search</p>
        </button>
      </div>
    </div>
  </form>
  <!-- <input v-model="where" @input="emit" type="text"> -->
</template>

<script>
// import { ref } from 'vue'
// props: {
// propName: propType
// }
export default {
  data() {
    return {
      where: '',
      startDate: '',
      endDate: '',
      show: false,
      showWho: false,
      guests: { adults: 1, children: 0, infants: 2, pets: 0 },
    }
  },
  methods: {
    emit() {
      this.$emit('filter', this.where)
    },
    setFilter() {
      this.$emit('emit')
    },
    setDate(isStart) {
      if (isStart === 'start') {
        let dates = Object.values(this.startDate)
        this.startDate = ('' + dates[0]).substring(4, 15)
        this.endDate = ('' + dates[1]).substring(4, 15)
      } else {
        let dates = Object.values(this.endDate)
        this.startDate = ('' + dates[0]).substring(4, 15)
        this.endDate = ('' + dates[1]).substring(4, 15)
      }
      console.log(this.startDate, this.endDate)

      if (
        this.startDate !== 'fined' &&
        this.startDate !== '' &&
        this.startDate !== '' &&
        this.endDate !== 'fined'
      ) {
        this.show = true
        this.$emit('date', { start: this.startDate, end: this.endDate })
      }
    },
  },
  computed: {},
  created() {},
}
</script>
