<template>
  <div :class="{ shadow: isActive }"></div>
  <section class="category-filters-layout">
    <section class="category-filters-container">
      <Carousel :items-to-show="12" :itemsToScroll="2">
        <Slide class="category-filter-container" v-for="(currLabel, idx) in labels" :key="idx">
          <section @click="selectLabel($event)" class="filter-img-layout"
            :class="{ 'selected-filter': queryLabel === currLabel }">
            <div class="filter-img-container">
              <img :src='getImgUrl(currLabel)' />
              <div class="filter-img-txt">
                {{ currLabel }}
              </div>
            </div>
          </section>
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
      <filter-btn @setMultyFilter="setMultiFilter"></filter-btn>
    </section>
  </section>
</template>

<script>

import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';
import filterBtn from './filter-btn.vue'

export default {

  data() {
    return {
      isActive: true,
      labels: ["Islands", "Beach", "Amazing pools", "OMG!", "National parks", "Cabins", "Design"
        , "Camping", "Amazing views", "Desert", "Arctic", "Tiny homes", "Lakefront", "Surfing", "Tropical"],
      label: '',
    }
  },
  components: {
    Carousel,
    Slide,
    Navigation,
    filterBtn,
  },
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
      category = category.toLowerCase()
      category = category.replace(/\s/g, "-")
      return new URL('https://res.cloudinary.com/nogacloud/image/upload/v1659275431/filter-imgs/' + category.toLowerCase() + '.png', import.meta.url).href
    },
    setMultiFilter(multiFilter){
      this.$emit('multiFilter',multiFilter)
    }
  },
  computed: {
    queryLabel() {
      if (this.$route.query?.label) return this.$route.query.label
      else ''
    }
  }
}
</script>

