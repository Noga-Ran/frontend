<template>
    <div class="orders-table-layout">
        <h3> Your Orders </h3>
        <!-- <img src="../assets/img/order-list-header.svg"></img> -->
        <table class="orders-table-container">
            <tr>
                <th>booked for</th>
                <th>stay name</th>
                <th>booked at</th>
                <th>booked by</th>
                <th>nights</th>
                <th>guests</th>
                <th>ppn</th>
                <th>total</th>
                <th>status</th>
                <th>actions</th>
            </tr>
            <tr v-for="order in orders" :key="order.id">
                <td>
                    <div class="td-content-container">{{ getDate(order.startDate, true) }} - {{ getDate(order.endDate,
                            true)
                    }}</div>
                </td>
                <td class="host-page-stay-name">
                    <div class="td-content-container">

                        {{ this.getStayName(order) }}
                    </div>
                </td>
                <td>
                    <div class="td-content-container">{{ getDate(order.createdAt) }} </div>
                </td>
                <td class="tac">
                    <div class="td-content-container">{{ order.buyer.fullname }}</div>
                </td>

                <td class="tac">
                    <div class="td-content-container">{{ getNightsCount(order) }}</div>
                </td>
                <td class="tac">
                    <div class="td-content-container">{{ order.guests }}</div>
                </td>
                <td class="money-class tac">
                    <div class="td-content-container"> $ {{ order.stay.price }}</div>
                </td>
                <td class="money-class tac">
                    <div class="td-content-container"> $ {{ order.totalPrice }}</div>
                </td>
                <td>
                    <div class="td-content-container">{{ order.status }}</div>
                </td>
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
        getDate(num, isDdMm = false) {
            if (isDdMm) {
                return num.slice(0, 5)
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
                return (shortenName.slice(0, 12) + "...")
            }
            return order.stay.name
        },
        getNightsCount(order) {
            // const date1 = new Date(order.startDate)
            // const date2 = new Date(order.endDate)
            // const diffTime = Math.abs(date2 - date1)
            // const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
            //    לתקן
            const diffDays = + order.endDate.slice(0, 2) - +order.startDate.slice(0, 2)
            return diffDays

        }
    },
    computed: {
    },
    unmounted() { },
}
</script>