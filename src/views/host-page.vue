
<template>
<app-header></app-header>
    <section class="host-page-layout">
        <section class="host-layout-top">
            <!-- <dash-boards /> -->
        </section>
        <section class="host-layout-bottom">
            <orders-table :orders="orders" />
        </section>
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
            orders: null,
        }
    },
    methods: {
        async loadPage() {
            await this.$store.dispatch({ type: 'loadOrders' })
            this.orders = await this.$store.getters.getOrders
            this.user = await this.$store.getters.getUser
            if (this.user) {
                this.isLoggedIn = await true
            }
        }
    },
    created() {
        this.loadPage()
    }

}
</script>

