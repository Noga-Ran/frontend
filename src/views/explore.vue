<template>
  <app-header @filter="setFilter" @date="setDate"></app-header>
  <div class="explore-filters-conatiner">
    <p>{{ staysAmount }} stays</p>
    <filter-btn />
  </div>
  <stay-list @filter="setFilter"></stay-list>
  <!-- <section>
    {{ city }}
  </section> -->
</template>

<script>
import appHeader from '../cmps/app-header.vue'
import stayList from '../cmps/stay-list.vue'
import filterBtn from '../cmps/filter-btn.vue'
export default {
  data() {
    return {
      city: null,
    }
  },
  created() {
    this.city = this.$route.params.where
    if (this.$route.query && this.$route.query.length) {
      var filterBy = {
        where: this.$route.query.where, checkIn: this.$route.query.checkIn, checkOut: this.$route.query.checkOut, label: this.$route.query.label,
        adults: this.$route.query.adults, children: this.$route.query.children, infants: this.$route.query.infants, pets: this.$route.query.pets
      }
      this.$store.dispatch({ type: "setFilter", filterBy })
    }
  },
  methods: {
    setFilter(filter, { who } = '') {
      var filterBy = Object.assign({}, this.$store.getters.filterBy)

      if (filter.label) {
        if (filter.label==='remove') {
          filterBy.label = ''
        }else{
          filterBy.label = filter.label
        }
      } else {
        filterBy.where = filter.where || ''
        filterBy.adults = who.adults || 0
        filterBy.children = who.children || 0
        filterBy.infants = who.infants || 0
        filterBy.pets = who.pets || 0
      }
      this.$store.dispatch({ type: "setFilter", filterBy })
      this.setQuery(filterBy)
    },
    setDate(date) {
      var filterBy = Object.assign({}, this.$store.getters.filterBy)
      filterBy.checkIn = date.start
      filterBy.checkOut = date.end
      console.log(filterBy);
      this.$store.dispatch({ type: "setFilter", filterBy })

      this.setQuery(filterBy)
    },
    setQuery(filterBy) {
      if (filterBy.where && filterBy.where !== '') {
        this.$router.push({
          path: `/explore/${filterBy.where}`, query: {
            where: filterBy.where, checkIn: filterBy.checkIn
            , checkOut: filterBy.checkOut, label: filterBy.label, adults: filterBy.adults, children: filterBy.children, infants: filterBy.infants, pets: filterBy.pets
          }
        })
      } else {
        this.$router.push({
          path: `/`, query: {
            where: filterBy.where, checkIn: filterBy.checkIn
            , checkOut: filterBy.checkOut, label: filterBy.label, adults: filterBy.adults, children: filterBy.children, infants: filterBy.infants, pets: filterBy.pets
          }
        })
      }
    }
  },
  components: {
    appHeader,
    stayList,
    filterBtn
  },
  computed: {
    staysAmount() { return this.$store.getters.amountOfStays }
  },
  unmounted() { },
}
</script>
