
<template>
    <section class="host-page-layout" v-if="!this.isFullList">
        <section class="host-layout-bottom">
            <orders-short :orders="orders" />
        </section> 
        <section class="host-layout-top">
            <dash-boards />
        </section>
    </section>
    <section v-else>
        <orders-table :orders="orders" />
    </section>

</template>

<script>
import appHeader from '../cmps/app-header.vue'
import dashBoards from '../cmps/dashboards.vue'
import ordersTable from '../cmps/orders-table.vue'
import ordersShort from '../cmps/orders-short-list.vue'

export default {
    components: {
        appHeader,
        dashBoards,
        ordersTable,
        ordersShort
    },
    data() {
        return {
            isLoggedIn: false,
            user: null,
            orders: null,
            isFullList:false,
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

