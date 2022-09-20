<template>
<app-header></app-header>
    <section class="user-page-layout">
        <section class="user-layout-bottom">
            <trips-table :orders="orders"/>
        </section>
    </section>
    <app-footer :isFixed="true"></app-footer>
</template>

<script>
import appHeader from '../cmps/app-header.vue'
import appFooter from '../cmps/app-footer.vue'
import tripsTable from '../cmps/trips-table.vue'

export default {
    components: {
        appHeader,
        tripsTable,
        appFooter
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
              this.orders = this.orders.filter(order => order.buyer._id === this.user._id )
                this.isLoggedIn = await true
            }else{
              this.orders = null
            }
        }
    },
    created() {
        this.loadPage()
    }

}
</script>

