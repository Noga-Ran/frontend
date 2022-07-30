<template>
<section class="stay-map-layout details-padding">
<h1 class="map-title">Where you’ll be</h1>
<div class="map-stay-address">{{ this.stayLocation.street }}</div>
<!-- <img src="" alt=""> -->
   <GMapMap :center="center"
      :options="options"
       :zoom="7" map-type-id="roadmap" style="height: 40rem">
        <GMapCluster :zoomOnClick="true">
          <GMapMarker :key="m" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true"
            @click="center = m.position"  />
         <!-- :icon="getImgUrl()" -->
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
  },

  data() {
    return {
      center: {lat: this.stayLocation.location.lat, lng:this.stayLocation.location.lan },
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
    getImgUrl(){
      return new URL('../assets/img/map/map-icon.svg', import.meta.url).href
    },
  },
}
</script>