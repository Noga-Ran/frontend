<template>
    <h3>My Trips<img src="https://www.svgrepo.com/show/233635/suitcase.svg"></h3>
    <div class="trips-table-layout">
        <div class="trip-container" v-for="order in orders" :key="order._id">
            <img :src="getImg(order.imgUrl)" alt="">
            <section class="user-trip-details">
                <p>{{ order.stay.name }}</p>
                <!-- <p>{{ order.startDate }} - {{ order.endDate }},<span v-if="order.stayAmount > 1"> {{
                        order.stayAmount
                }} &nbsp;nights</span><span v-else> {{ order.stayAmount }},&nbsp;night</span></p> -->
                <p v-if="order.stayAmount > 1">{{ order.startDate }} - {{ order.endDate }}, <span>{{order.stayAmount}} nights</span></p>
                <p v-else>{{ order.startDate }} - {{ order.endDate }}, <span>{{order.stayAmount}} night</span></p>
                <p v-if="order.guests > 1">{{ order.guests }} guests</p>
                <p v-else>{{ order.guests }} guest</p>
                <section>    
                    <p><span>Total</span>: ${{ order.totalPrice }}</p>
                    <p><span>Status:&nbsp;</span><span :class="{ 'trip-pending': (order.status === 'pending'),'trip-approved':(order.status==='approved')}">{{ order.status }}</span>
                    </p>
                </section>
            </section>
        </div>
        <!-- <table class="orders-table-container">
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
        </table> -->
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
            stay: null
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
            const date1 = new Date(order.startDate);
            const date2 = new Date(order.endDate);
            const diffTime = Math.abs(date2 - date1);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays
        },
        getImg(imgName) {
            return new URL('https://res.cloudinary.com/nogacloud/image/upload/v1659274509/stays/' + imgName, import.meta.url).href
        },
    },
    computed: {
    },
    unmounted() { },
}
</script>