<template>
  <div class="header-filter-layout" v-if="!isSearch && !isDetails">
    <div class="header-filter-container" @click.prevent="searching">
      <div class="header-txt-container">{{ location }}</div>
      <span></span>
      <div class="header-txt-container">Any week</div>
      <span></span>
      <div class="header-txt-container filter-guests">Add guests</div>
      <div class="header-demo-search" @click.prevent="emitFilter">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
          focusable="false" style="
            display: block;
            fill: none;
            height: 12px;
            width: 12px;
            stroke: currentcolor;
            stroke-width: 5.33333;
            overflow: visible;
          ">
          <g fill="none">
            <path
              d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
            </path>
          </g>
        </svg>
      </div>
    </div>
  </div>
  <section class="details-filter-layout" v-if="isDetails && !isSearch" @click.prevent="searching">
    <div class="details-search-txt">Start your search</div>
    <div class="details-red-search">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
          focusable="false" style="
            display: block;
            fill: none;
            height: 12px;
            width: 12px;
            stroke: currentcolor;
            stroke-width: 5.33333;
            overflow: visible;
          ">
          <g fill="none">
            <path
              d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
            </path>
          </g>
        </svg>
      </div>
  </section>
  <div v-if="isSearch" :class="{ 'filter-modal-container': isSearch }">
    <filter-modal @guest="setGuest" @closeHeader="closeHeader" @filter="setFilter" @emit="emitFilter"
      @date="emitDate" />
  </div>
</template>

<script>
import filterModal from './filter-modal.vue'

export default {
   props: {
    isDetails: {
      type: Boolean,
    },
  },
  data() {
    return {
      where: '',
      isSearch: false,
      windowY: 0,
      guests: 0,
    }
  },
  methods: {
    closeHeader() {
      this.isSearch = false
      this.$emit('closeHeader')
    },
    searching() {
      this.$emit('search', true)
      this.isSearch = true
    },
    emitFilter() {
      let filterWhere = this.where
      let who = this.guests
      this.isSearch = false
      this.where = ''
      this.guests = 0
      this.$emit('filter', filterWhere, who)
    },
    setFilter(filter) {
      this.where = filter
    },
    emitDate(date) {
      this.$emit('date', date)
    },
    setGuest(guests) {
      this.guests = guests
    },
  },
  computed: {
    location() {
      return this.$route.query.where || this.$route.params.where || 'Anywhere'
    },
  },
  created() { },
  components: {
    filterModal,
  },
}
</script>
