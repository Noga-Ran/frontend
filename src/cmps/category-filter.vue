<template>
  <div :class="{ shadow: isActive }"></div>
  <section class="category-filters-layout">
    <section class="category-filters-container">
   <Carousel :items-to-show="12" :itemsToScroll="4">
    <!-- <section class="category-filter-container" v-for="(currLabel, idx) in labels" :key="idx"> -->
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
  <!-- </section> -->
  <template #addons>
    <Navigation />
  </template>
</Carousel>
    </section>
  </section>
</template>

<script>

import { Carousel, Navigation, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

export default  {

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
  },
  computed: {
    queryLabel() {
      if (this.$route.query?.label) return this.$route.query.label
      else ''
    }
  }
}
</script>


<style>
.carousel__prev--in-active,
.carousel__next--in-active {
  display: none;
}
.carousel__prev,
.carousel__next {
  background-color: white;
  color: black;
  border: 1px solid grey;
}

.carousel__item {
  padding: 20px;
}
</style>
