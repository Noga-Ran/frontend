<template>
  <div :class="{ shadow: isActive }"></div>
  <section class="category-filters-layout">
    <section class="category-filters-container">
      <section class="category-filter-container" v-for="(currLabel, idx) in labels" :key="idx">
        <section @click="selectLabel($event)" class="filter-img-layout"
          :class="{ 'selected-filter': queryLabel === currLabel }">
          <div class="filter-img-container">
            <img :src='getImgUrl(currLabel)' />
            <div class="filter-img-txt">
              {{ currLabel }}
            </div>
          </div>
        </section>
      </section>
    </section>
  </section>
</template>

<script>

export default {
  data() {
    return {
      isActive: true,
      labels: ["Islands", "Beach", "Amazing pools", "OMG!", "National parks", "Cabins", "Design"
        , "Camping", "Amazing views", "Desert", "Arctic", "Tiny homes", "Lakefront", "Surfing", "Tropical"],
      label: '',
    }
  },
  components: {},
  emits: ['filter'],
  methods: {
    selectLabel(ev = false, idx = false) {
      if (ev) {

        var elElement
        if (ev.path[0].tagName !== 'SECTION') {
          if (ev.path[1].tagName === 'SECTION') {
            elElement = ev.path[1]
          }
          else elElement = ev.path[2]
        }
        else elElement = ev.target

        var elActiveFilter = document.querySelector('.selected-filter')
        if (elActiveFilter !== elElement && elActiveFilter) {
          elActiveFilter.classList.remove('selected-filter')
        }
        elElement.classList.toggle('selected-filter')
        var filter = elElement.outerText
        if (filter === this.queryLabel) {
          this.$emit('filter', { label: 'remove' })
        } else this.$emit('filter', { label: filter })
      }
      else {
        this.$emit()
      }
    },
    getImgUrl(category) {
      if (category === "OMG!") category = 'omg'
      category = category.replace(/\s/g, "-")
      return new URL('../assets/img/filter-imgs/' + category.toLowerCase() + '.jpg', import.meta.url).href
    },
  },
  computed: {
    queryLabel() {
      if (this.$route.query?.label) return this.$route.query.label
      else ''
    }
  }
}
</script>
