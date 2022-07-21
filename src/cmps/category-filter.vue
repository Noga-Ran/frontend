<template>
  <div :class="{ shadow: isActive }"></div>
  <section class="category-filters-layout">
    <section class="category-filters-container">
      <div class="filter-img-layout">
        <div class="filter-img-container">
          <img src="../assets/img/filter-imgs/islands.jpg" alt="" />
          <div @click.prevent="choosenLabel($event)" class="filter-img-txt">
            Islands
          </div>
        </div>
      </div>
      <div class="filter-img-layout">
        <div class="filter-img-container">
          <img src="../assets/img/filter-imgs/beach.jpg" alt="" />
          <div @click.prevent="choosenLabel($event)" class="filter-img-txt">
            Beach
          </div>
        </div>
      </div>
      <div class="filter-img-layout">
        <div class="filter-img-container">
          <img src="../assets/img/filter-imgs/amazing-pools.jpg" alt="" />
          <div @click.prevent="choosenLabel($event)" class="filter-img-txt">
            Amazing pools
          </div>
        </div>
      </div>
      <div class="filter-img-layout">
        <div class="filter-img-container">
          <img src="../assets/img/filter-imgs/omg.jpg" alt="" />
          <div @click.prevent="choosenLabel($event)" class="filter-img-txt">
            OMG!
          </div>
        </div>
      </div>
      <div class="filter-img-layout">
        <div class="filter-img-container">
          <img src="../assets/img/filter-imgs/national-parks.jpg" alt="" />
          <div @click.prevent="choosenLabel($event)" class="filter-img-txt">
            National parks
          </div>
        </div>
      </div>
      <div class="filter-img-layout">
        <div class="filter-img-container">
          <img src="../assets/img/filter-imgs/cabins.jpg" alt="" />
          <div @click.prevent="choosenLabel($event)" class="filter-img-txt">
            Cabins
          </div>
        </div>
      </div>
      <div class="filter-img-layout">
        <div class="filter-img-container">
          <img src="../assets/img/filter-imgs/design.jpg" alt="" />
          <div @click.prevent="choosenLabel($event)" class="filter-img-txt">
            Design
          </div>
        </div>
      </div>
      <div class="filter-img-layout">
        <div class="filter-img-container">
          <img src="../assets/img/filter-imgs/campings.jpg" alt="" />
          <div @click.prevent="choosenLabel($event)" class="filter-img-txt">
            Camping
          </div>
        </div>
      </div>
      <div class="filter-img-layout">
        <div class="filter-img-container">
          <img src="../assets/img/filter-imgs/tiny-homes.jpg" alt="" />
          <div @click.prevent="choosenLabel($event)" class="filter-img-txt">
            Tiny homes
          </div>
        </div>
      </div>
      <div class="filter-img-layout">
        <div class="filter-img-container">
          <img src="../assets/img/filter-imgs/desert.jpg" alt="" />
          <div @click.prevent="choosenLabel($event)" class="filter-img-txt">
            Desert
          </div>
        </div>
      </div>
      <div class="filter-img-layout">
        <div class="filter-img-container">
          <img src="../assets/img/filter-imgs/arctic.jpg" alt="" />
          <div @click.prevent="choosenLabel($event)" class="filter-img-txt">
            Arctic
          </div>
        </div>
      </div>
      <div class="filter-img-layout">
        <div class="filter-img-container">
          <img src="../assets/img/filter-imgs/amazing-views.jpg" alt="" />
          <div @click.prevent="choosenLabel($event)" class="filter-img-txt">
            Amazing views
          </div>
        </div>
      </div>
      <div class="filter-img-layout">
        <div class="filter-img-container">
          <img src="../assets/img/filter-imgs/lakefront.jpg" alt="" />
          <div @click.prevent="choosenLabel($event)" class="filter-img-txt">
            Lakefront
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      label: '',
    }
  },
  components: {},
  methods: {
    choosenLabel(ev) {
      this.label = ev.target.outerText
      this.$emit('filter', this.label)
    },
  },
  created() {
  }
}
</script>
