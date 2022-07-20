
<template>
    <section class="homepage-layout">
        <app-header />
        <stay-list/>
        <p>{{stays}}</p>
    </section>
</template>

<script>
import appHeader from '../cmps/app-header.vue'
import stayList from '../cmps/stay-list.vue'
import {stayService} from '../services/stay-service'
export default {
    components: {
        appHeader,
        stayList,
    },
    data(){
        stays: stayService.query()
    },
}
</script>
