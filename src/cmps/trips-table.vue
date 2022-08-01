<template>
    <div class="orders-table-layout">
        <h3>Trips <img src="https://res.cloudinary.com/nogacloud/image/upload/v1659338315/other/travel.svg"></h3>
        <table class="orders-table-container">
            <tr>
                <th>Stay Name</th>
                <th>Booked At</th>
                <th>Booked for</th>
                <th>Nights</th>
                <th>Guests</th>
                <th>Total</th>
            </tr>
            <tr v-for="order in orders" :key="order._id">
                <td class="host-page-stay-name">
                    <div class="td-content-container">
                        {{ this.getStayName(order) }}
                    </div>
                </td>
                <td>
                    <div class="td-content-container">{{ getDate(order.createdAt) }} </div>
                </td>
                <td>
                    <div class="td-content-container">{{ getDate(order.startDate, true) }} - {{ getDate(order.endDate,
                            true)
                    }}</div>
                </td>
                <td class="tac">
                    <div class="td-content-container">{{ this.getNightsCount(order) }}</div>
                </td>
                <td class="tac">
                    <div class="td-content-container">{{ order.guests }}</div>
                </td>
                <td class="money-class tac">
                    <div class="td-content-container"> $ {{order.totalPrice}}</div>
                </td>
                <td>
                    <div class="td-content-container">{{ order.status }}</div>
                </td>
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
            stay:null
        };
    },
    created() {
    },
    methods: {
        getDate(num, isDdMm = false) {
            if (isDdMm) {
                return num.slice(0, 6)
            }
            return new Date(num).toLocaleDateString('en-GB')
        },
        getStayName(order) {
            if (order.stay.name.length > 17) {
                var shortenName = JSON.parse(JSON.stringify(order.stay.name))
                return (shortenName.slice(0, 12) + "...")
            }
            return order.stay.name
        },
        getNightsCount(order) {
            console.log(typeof(order.startDate),typeof(order.endDate))
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