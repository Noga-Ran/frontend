<template>
  <section class="details-padding stay-map-layout ">
    <h1 class="map-title">Where you’ll be</h1>
    <div class="map-stay-address">{{ this.stayLocation.street }}</div>
    <!-- <img src="" alt=""> -->
    <GMapMap v-if="!isMobile" :center="center" :options="options" :zoom="7" map-type-id="roadmap" style="height: 40rem"
      class="mobile-map-cont">
      <GMapCluster :zoomOnClick="true">
        <GMapMarker :key="m" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
          @click="center = m.position" 
          :icon= '{
            url: "https://res.cloudinary.com/nogacloud/image/upload/v1659275599/other/map-icon.svg",
             scaledSize: {width: 20, height: 20},
          }'
            />
          
       
      </GMapCluster>
    </GMapMap>
    <GMapMap v-else :center="center" :options="options" :zoom="7" map-type-id="roadmap" style="height: 29vh;border-radius: 10px;"
      class="mobile-map-cont">
      <GMapCluster :zoomOnClick="true">
        <GMapMarker :key="m" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
          @click="center = m.position" 
          :icon= '{
            url: "https://res.cloudinary.com/nogacloud/image/upload/v1659275599/other/map-icon.svg",
             scaledSize: {width: 20, height: 20},
          }'
          />
         
         <!-- :icon="getImgUrl()" -->
        <!-- :icon= '{url:"getImgUrl()"}' -->
      </GMapCluster>
    </GMapMap>
  </section>
</template>

<script >

export default {
  name: 'App',
  props: {
    stayLocation: {
      type: Object,
    },
    isMobile: {
      type: Boolean,
    }
  },

  data() {
    return {
      center: { lat: this.stayLocation.location.lat, lng: this.stayLocation.location.lan },
      markers: [
        {
          position: {
            lat: this.stayLocation.location.lat, lng: this.stayLocation.location.lan
          },
        }
      ]
    }
  },
  methods: {
    getImgUrl() {
      return new URL('../assets/img/map/map-icon.svg', import.meta.url).href
    },
  },
}
</script>