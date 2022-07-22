<template>
  <div :class="{ shadow: isActive }"></div>
  <section class="category-filters-layout">
    <section class="category-filters-container">
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/islands.jpg" />
            <div class="filter-img-txt">
              Islands
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/beach.jpg" />
            <div class="filter-img-txt">
              Beach
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/amazing-pools.jpg" />
            <div class="filter-img-txt">
              Amazing pools
            </div>
          </div>
        </section>
      </section>
      <div>
        <section class="category-filter-container">
          <section @click="selectLabel($event)" class="filter-img-layout">
            <div class="filter-img-container">
              <img src="../assets/img/filter-imgs/omg.jpg" />
              <div class="filter-img-txt">
                OMG!
              </div>
            </div>
          </section>
        </section>
      </div>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/national-parks.jpg" />
            <div class="filter-img-txt">
              National parks
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/cabins.jpg" />
            <div class="filter-img-txt">
              Cabins
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/design.jpg" />
            <div class="filter-img-txt">
              Design
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/campings.jpg" />
            <div class="filter-img-txt">
              Camping
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/tiny-homes.jpg" />
            <div class="filter-img-txt">
              Tiny homes
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/desert.jpg" />
            <div class="filter-img-txt">
              Desert
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/arctic.jpg" />
            <div class="filter-img-txt">
              Arctic
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/amazing-views.jpg" />
            <div class="filter-img-txt">
              Amazing views
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/lakefront.jpg" />
            <div class="filter-img-txt">
              Lakefront
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/surfing.jpg" />
            <div class="filter-img-txt">
              Surfing
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/tropical.jpg" />
            <div class="filter-img-txt">
              Tropical
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
      label: '',
    }
  },
  components: {},
  methods: {
    selectLabel(ev) {
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
      this.$emit('filter', filter)
    }
  },
  created() {
  }
}
</script>
