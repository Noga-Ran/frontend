<template>
  <app-header @filter="setFilter" @date="setDate"></app-header>
  <div class="explore-filters-conatiner">
    <p>{{staysAmount}} stays</p>
    <filter-btn/>
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
    if (this.$route.query) {
      var filterBy = { where: this.$route.query.where, checkIn: this.$route.query.checkIn, checkOut: this.$route.query.checkOut, who: this.$route.query.who, label: this.$route.query.label }
      this.$store.dispatch({ type: "setFilter", filterBy })
    }
  },
  methods: {
    setFilter(filter) {
      var filterBy = Object.assign({}, this.$store.getters.filterBy)

      if (filter.label) {
        filterBy.label = filter.label
      } else {
        filterBy.where = filter.where
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
      if (filterBy.where.length) {
        this.$router.push({ path: `/explore/${filterBy.where}`, query: { where: filterBy.where, checkIn: filterBy.checkIn, checkOut: filterBy.checkOut, who: filterBy.who, label: filterBy.label } })
      } else {
        this.$router.push({ path: `/`, query: { where: filterBy.where, checkIn: filterBy.checkIn, checkOut: filterBy.checkOut, who: filterBy.who, label: filterBy.label } })
      }
    }
  },
  components: {
    appHeader,
    stayList,
    filterBtn
  },
  computed: {
    staysAmount(){return this.$store.getters.amountOfStays}
  },
  unmounted() { },
}
</script>
