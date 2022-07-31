<template>
    <button type="button" class="filters-btn" @click="showFilterModal = true">
        <span class="filter-btn-container">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                focusable="false" style="display: block; height: 16px; width: 16px; fill: currentcolor;">
                <path
                    d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z">
                </path>
            </svg>
            <span class="t1psh3xd dir dir-ltr">Filters</span></span></button>

 <div class="amenities-modal">
      <vue-final-modal
        v-model="showFilterModal"
        class="modal-container"
        content-class="modal_content">
        <section class="modal-container">
          <div class="close-modal">
            <button class="modal__close" @click="showFilterModal = false"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3; overflow: visible;"><path d="m6 6 20 20"></path><path d="m26 6-20 20"></path></svg>
            </button>
          </div>
          <div class="modal-filter-container">
    <div class="filter-modal">
        <div class="filters-title">Filters</div>
        <hr>
            <h1>Price range</h1>
        <div class="price-inputs">
            <span class="input-price-container">
                <div>min price</div>
                <div>$ <input class="price-input" type="number" v-model.number="multyFilterBy.minPrice" min="0"></div>
            </span>
            <span>-</span>
             <span class="input-price-container">
                <div>max price</div>
                <div>$ <input class="price-input" type="number" v-model.number="multyFilterBy.maxPrice" :min="multyFilterBy.minPrice+1"></div>
            </span>
            </div>
            <h1 class="place-type-header">Type of place</h1>
            <input type="checkbox" class="entire-place" name="entirePlace" v-model="multyFilterBy.entirePlace" @click="multyFilterBy.entirePlace=!multyFilterBy.entirePlace">
            <label for="entirePlace"> Entire Place  <div class="grey">A place all to yourself</div></label><br>
            
            <input type="checkbox" class="private-room" name="privateRoom" v-model="multyFilterBy.privateRoom" @click="multyFilterBy.privateRoom=!multyFilterBy.privateRoom">
            <label for="privateRoom"> Private room   <div class="grey">Your own room in a home or a hotel, plus some shared common spaces</div></label><br>
          
           <input type="checkbox" class="shared-room" name="sharedRoom" v-model="multyFilterBy.sharedRoom" @click="multyFilterBy.sharedRoom=!multyFilterBy.sharedRoom">
            <label for="sharedRoom"> Shared room  <div class="grey">A sleeping space and common areas that may be shared with others</div></label><br>
          <h1>Rooms and beds</h1>
          <div>Bedrooms</div>
         <section class="bedroom-btns">
          <button @click="multyFilterBy.bedRooms='any'" :class="{'chosen-amenity':multyFilterBy.bedRooms==='any'}">Any</button>
          <button @click="multyFilterBy.bedRooms=1" :class="{'chosen-amenity':multyFilterBy.bedRooms===1}">1</button>
          <button @click="multyFilterBy.bedRooms=2" :class="{'chosen-amenity':multyFilterBy.bedRooms===2}">2</button>
          <button @click="multyFilterBy.bedRooms=3" :class="{'chosen-amenity':multyFilterBy.bedRooms===3}">3</button>
          </section> 
           <div>Beds</div>
         <section class="bedroom-btns">
          <button @click="multyFilterBy.beds='any'" :class="{'chosen-amenity':multyFilterBy.beds==='any'}">Any</button>
          <button @click="multyFilterBy.beds=1" :class="{'chosen-amenity':multyFilterBy.beds===1}">1</button>
          <button @click="multyFilterBy.beds=2" :class="{'chosen-amenity':multyFilterBy.beds===2}">2</button>
          <button @click="multyFilterBy.beds=3" :class="{'chosen-amenity':multyFilterBy.beds==3}">3</button>
          </section>
          <h1>Property type</h1>
          <section class="property-btns">
          <button @click="multyFilterBy.propertyType='house'" :class="{'chosen-propery':multyFilterBy.propertyType==='house'}"> <img src="https://a0.muscache.com/pictures/4d7580e1-4ab2-4d26-a3d6-97f9555ba8f9.jpg" alt="">
            House</button>
          <button @click="multyFilterBy.propertyType='apartment'" :class="{'chosen-propery':multyFilterBy.propertyType==='apartment'}"> <img src="https://a0.muscache.com/pictures/21cfc7c9-5457-494d-9779-7b0c21d81a25.jpg" alt="">
            Apartment</button>
          <button @click="multyFilterBy.propertyType='guesthouse'" :class="{'chosen-propery':multyFilterBy.propertyType==='guesthouse'}"> <img src="https://a0.muscache.com/pictures/6f261426-2e47-4c91-8b1a-7a847da2b21b.jpg" alt=""> Guesthouse</button>
         </section>
         <h1>Amenities</h1>
          <section class="amenities-filter">
            <div>
          <input type="checkbox" class="wifi" name="wifi" v-model="multyFilterBy.wifi" @click="multyFilterBy.wifi=!multyFilterBy.wifi">
          <label for="Wifi">Wifi</label></div>
          <div><input type="checkbox" class="air-conditioning" name="air-conditioning" v-model="multyFilterBy.airConditioning" @click="multyFilterBy.airConditioning=!multyFilterBy.airConditioning">
          <label for="air-conditioning">Air conditioning</label></div>
         <div> <input type="checkbox" class="kitchen" name="kitchen" v-model="multyFilterBy.kitchen" @click="multyFilterBy.kitchen=!multyFilterBy.kitchen">
          <label for="kitchen">Kitchen</label></div>
         <div> <input type="checkbox" class="washer" name="washer" v-model="multyFilterBy.washer" @click="multyFilterBy.washer=!multyFilterBy.washer">
          <label for="washer">Washer</label></div>
         <div><input type="checkbox" class="free-parking" name="free-parking" v-model="multyFilterBy.freeParking" @click="multyFilterBy.freeParking=!multyFilterBy.freeParking">
          <label for="free-parking">Free parking</label></div>
          </section>
          <section class="search-amenitis">
            <button class="clear-multy-filter-btn" @click="clearFilter">Clear all</button>
            <button class="show-filtered-btn" @click="sendMultyFilter">Show stays</button>
          </section>
           </div>
          </div>
        </section>
      </vue-final-modal>
      </div>

</template>

<script>

import { $vfm, VueFinalModal, ModalsContainer } from 'vue-final-modal'
export default {
  components: {
    VueFinalModal,
    ModalsContainer,
  },
    data() {
        return {
            showFilterModal: false,
            multyFilterBy: {
             minPrice: 10,
             maxPrice: 1000,
             entirePlace: false,
             privateRoom: false,
             sharedRoom: false,
             bedRooms: 'any',
             beds: 'any',
             propertyType: null,
             wifi: false,
             airConditioning: false,
             kitchen: false,
             washer: false,
             freeParking: false,
            }
        }
    },
    methods: {
        sendMultyFilter(){
          if(+this.multyFilterBy.minPrice>+this.multyFilterBy.maxPrice) {
            let minPrice = +this.multyFilterBy.minPrice
            this.multyFilterBy.minPrice = +this.multyFilterBy.maxPrice
            this.multyFilterBy.maxPrice = minPrice
          }
            console.log('multyFilterBy', this.multyFilterBy)
            this.showFilterModal = false
            this.$emit('setMultyFilter', this.multyFilterBy)
        },
        clearFilter(){
            this.multyFilterBy = this.getEmptyFilter()
        },
        getEmptyFilter(){
            return {
            minPrice: 10,
             maxPrice: 1000,
             entirePlace: false,
             privateRoom: false,
             sharedRoom: false,
             bedRooms: 'any',
             beds: 'any',
             propertyType: null,
             wifi: false,
             airConditioning: false,
             kitchen: false,
             washer: false,
             freeParking: false,
            }
        },
    },
    computed: {},
    created() {},
}
</script>