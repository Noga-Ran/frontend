
<template>
    <app-header></app-header>
    <section class="host-page-layout">
        <dash-boards></dash-boards>
        <orders-table></orders-table>
    </section>
</template>

<script>
import appHeader from '../cmps/app-header.vue'
import dashBoards from '../cmps/dashboards.vue'
import ordersTable from '../cmps/orders-table.vue'

export default {
    components: {
        appHeader,
        dashBoards,
        ordersTable,
    },
    data() {
        return {
            isLoggedIn: false,
            user: null,
        }
    },
    methods: {
    },
    created() {
        this.user = this.$store.getters.getUser
        if (this.user) {
            this.isLoggedIn = true
        }
    }

}
</script>


