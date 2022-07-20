
<template>
    <section class="homepage-layout">
        <app-header />
        <stay-list/>
    </section>
</template>

<script>
import appHeader from '../components/app-header.vue'
import stayList from '../components/stay-list.vue'
export default {
    components: {
        appHeader,
        stayList,
    },
}
</script>
