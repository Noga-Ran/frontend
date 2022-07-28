<template>
    <div class="orders-table-layout">
        <h3> Your Orders</h3>
        <table class="orders-table-container">
            <tr>
                <th>Stay Name</th>
                <th>Booked At</th>
                <th>Booked By</th>
                <th>Booked for</th>
                <th>Nights</th>
                <th>Guests</th>
                <th>PPN</th>
                <th>Total</th>
                <th>Status</th>
            </tr>
            <tr v-for="order in orders" :key="order.id">
                <td>{{ this.getStayName(order) }}</td>
                <td>{{ getDate(order.createdAt) }} </td>
                <td class="tac">{{ order.buyer.fullname }}</td>
                <td>{{ getDate(order.startDate,true) }} - {{ getDate(order.endDate,true) }}</td>
                <td class="tac">{{ this.getNightsCount(order) }}</td>
                <td class="tac">{{ order.guests }}</td>
                <td class="money-class tac">{{ order.stay.price }} $</td>
                <td class="money-class tac">{{ order.totalPrice }} $</td>
                <td>{{ order.status }}</td>
                <div class="order-actions">
                    <img src="../assets/img/tick.svg" alt="">
                    <img src="../assets/img/x.svg" alt="">
                </div>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        orders: {
            type: Object,
        },
    },
    data() {
        return {
        };
    },
    created() {
    },
    methods: {
        getDate(num,isDdMm = false) {
            if(isDdMm){
            return num.slice(0,6)
           }
            return new Date(num).toLocaleDateString('en-GB')
        },
        getStayImgById(stayId) {
            this.stay = this.$store.dispatch({
                type: 'getStayById',
                stayId,
            })
        },
        getStayName(order) {
            if (order.stay.name.length > 17) {
                var shortenName = JSON.parse(JSON.stringify(order.stay.name))
                console.log('shortenName: ',shortenName)
                return (shortenName.slice(0, 12) + "...")
            }
            return order.stay.name
        },
        getNightsCount(order) {
            const date1 = new Date(order.startDate);
            const date2 = new Date(order.endDate);
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
           return diffDays
        }
    },
    computed: {
    },
    unmounted() { },
}
</script>