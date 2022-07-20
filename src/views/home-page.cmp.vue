
<template>
    <section class="homepage-layout">
        <app-header />
        <stay-list/>
    </section>
</template>

<script>
import appHeader from '../cmps/app-header.vue'
import stayList from '../cmps/stay-list.vue'
export default {
    components: {
        appHeader,
        stayList,
    },
}
</script>
