<template>
  <app-header @filter="setFilter"></app-header>
  <div class="explore-filters-conatiner">
    <p>{{ staysAmount }} stays</p>
    <filter-btn @setMultyFilter="setMultiFilter" />
  </div>
  <stay-list></stay-list>
  <app-footer :isFixed="false" />

</template>

<script>
import appHeader from '../cmps/app-header.vue'
import stayList from '../cmps/stay-list.vue'
import filterBtn from '../cmps/filter-btn.vue'
import appFooter from '../cmps/app-footer.vue'

export default {
  data() {
    return {
      city: null,

    }
  },
  created() {
    this.city = this.$route.params.where
    
    if (this.$route.query && Object.keys(this.$route.query).length !== 0) {
      const { where, checkIn, checkOut, label, adults, children, infants, pets } = this.$route.query
      this.$store.dispatch({ type: "setFilter", filterBy: { where, checkIn, checkOut, label, adults, children, infants, pets } })
    }
  },
  methods: {
    setFilter(filter, { who } = '',{date} = {start:'',end:''}) {
      var filterBy = Object.assign({}, this.$store.getters.filterBy)
      if (filter.label) {
        if (filter.label === 'remove') {
          filterBy.label = ''
        } else {
           filterBy.label = filter.label
        }
      } else {
        filterBy.where = filter?.where || ''
        filterBy.adults = who?.adults || 0
        filterBy.children = who?.children || 0
        filterBy.infants = who?.infants || 0
        filterBy.pets = who?.pets || 0
        filterBy.checkIn = date.start
        filterBy.checkOut = date.end
      }
      this.$store.dispatch({ type: "setFilter", filterBy })
      this.setQuery(filterBy)
    },
    setQuery(filterBy) {
      const query = {
        where: filterBy.where, checkIn: filterBy.checkIn, checkOut: filterBy.checkOut
        , label: filterBy.label, adults: filterBy.adults, children: filterBy.children, infants: filterBy.infants, pets: filterBy.pets
      }
      if (filterBy.where) {
        this.$router.push({ query })
      } else {
        this.$router.push({ path: `/`, query })
      }
    },
    setMultiFilter(multiFilter){
      let filterBy = Object.assign(JSON.parse(JSON.stringify(this.$store.getters.filterBy)),multiFilter)
      this.$store.dispatch({type:"setFilter",filterBy})
    }
  },
  components: {
    appHeader,
    stayList,
    filterBtn,
    appFooter
  },
  computed: {
    staysAmount() { return this.$store.getters.amountOfStays }
  }
}
</script>
