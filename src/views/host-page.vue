<template>
    <section>
        <app-header-vue />
        <section class="host-page-layout" v-if="!this.isFullList">
            <section class="host-layout-bottom">
                <orders-short :orders="orders"/>
            </section>
            <section class="host-layout-top">
                <dash-boards />
            </section>
        </section>
        <section v-else>
            <orders-table :orders="orders" />
        </section>
    </section>

</template>

<script>
import appHeaderVue from '../cmps/app-header.vue'
import dashBoards from '../cmps/dashboards.vue'
import ordersTable from '../cmps/orders-table.vue'
import ordersShort from '../cmps/orders-short-list.vue'

export default {
    components: {
        dashBoards,
        ordersTable,
        ordersShort,
        appHeaderVue
    },
    data() {
        return {
            isLoggedIn: false,
            user: null,
            orders: null,
            isFullList: false,
        }
    },
    methods: {
        async loadPage() {
            await this.$store.dispatch({ type: 'loadOrders' })
            this.orders = await this.$store.getters.getOrders
            this.user = await this.$store.getters.getUser
            if (this.user) {
                this.isLoggedIn = await true
                this.orders = JSON.parse(JSON.stringify(this.orders))
                this.orders = this.orders.filter(order => order.hostId === this.user._id)
            }
        }
    },
    created() {
        this.loadPage()
    }

}
</script>

