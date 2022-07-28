<template>
  <div :class="{ shadow: isActive }"></div>
  <section class="category-filters-layout">
    <section class="category-filters-container">
      <section class="category-filter-container" if>
        <section @click="selectLabel($event)" class="filter-img-layout" :class="{'selected-filter':queryLabel==='Islands'}">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/islands.jpg" />
            <div class="filter-img-txt">
              Islands
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout" :class="{'selected-filter':queryLabel==='Beach'}">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/beach.jpg" />
            <div class="filter-img-txt">
              Beach
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout" :class="{'selected-filter':queryLabel==='Amazing pools'}">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/amazing-pools.jpg" />
            <div class="filter-img-txt">
              Amazing pools
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout" :class="{'selected-filter':queryLabel==='OMG!'}">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/omg.jpg" />
            <div class="filter-img-txt">
              OMG!
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout" :class="{'selected-filter':queryLabel==='National parks'}">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/national-parks.jpg" />
            <div class="filter-img-txt">
              National parks
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout" :class="{'selected-filter':queryLabel==='Cabins'}">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/cabins.jpg" />
            <div class="filter-img-txt">
              Cabins
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout" :class="{'selected-filter':queryLabel==='Design'}">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/design.jpg" />
            <div class="filter-img-txt">
              Design
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout" :class="{'selected-filter':queryLabel==='Camping'}">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/campings.jpg" />
            <div class="filter-img-txt">
              Camping
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout" :class="{'selected-filter':queryLabel==='Amazing views'}">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/amazing-views.jpg" />
            <div class="filter-img-txt">
              Amazing views
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout" :class="{'selected-filter':queryLabel==='Desert'}">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/desert.jpg" />
            <div class="filter-img-txt">
              Desert
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout" :class="{'selected-filter':queryLabel==='Arctic'}">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/arctic.jpg" />
            <div class="filter-img-txt">
              Arctic
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout" :class="{'selected-filter':queryLabel==='Tiny homes'}">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/tiny-homes.jpg" />
            <div class="filter-img-txt">
              Tiny homes
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout" :class="{'selected-filter':queryLabel==='Lakefront'}">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/lakefront.jpg" />
            <div class="filter-img-txt">
              Lakefront
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout" :class="{'selected-filter':queryLabel==='Surfing'}">
          <div class="filter-img-container">
            <img src="../assets/img/filter-imgs/surfing.jpg" />
            <div class="filter-img-txt">
              Surfing
            </div>
          </div>
        </section>
      </section>
      <section class="category-filter-container">
        <section @click="selectLabel($event)" class="filter-img-layout" :class="{'selected-filter':queryLabel==='Tropical'}">
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
      queryLabel: '',
    }
  },
  components: {},
  emits: ['filter'],
  methods: {
    selectLabel(ev=false,idx=false) {
      if(ev){

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
        this.$emit('filter', {label:filter})
      }
      else{
        this.$emit()
      }
    }
  },
  created() {
    if(this.$route.query?.label){
      this.queryLabel = this.$route.query.label
    }
  }
}
</script>
