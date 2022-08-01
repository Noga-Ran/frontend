<template>
    <div class="orders-table-layout" v-for="order in orders" :key="7 + order">
        <!-- {{ this.getStayName(order) }}
        <div class="">{{ getDate(order.createdAt) }} </div>
        <div class="">{{ order.buyer.fullname }}</div>
        <div class="">{{ getDate(order.startDate, true) }} - {{ getDate(order.endDate, true)
        }}</div>
        <div class="">{{ getNightsCount(order) }}</div>
        <div class="">{{ order.guests }}</div>
        <div class=""> $ {{ order.stay.price }}</div>
        <div class=""> $ {{ order.totalPrice }}</div>
        <div class="">{{ order.status }}</div> -->
        {{ order }}
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
            console.log('order: ', order)
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

        },
        getRandomImg() {
            let randomNum = Math.floor(Math.random() * (99 - 1) + 1)
            var gender = ['men', 'women']
            let randomGender = Math.floor(Math.random() * 2)
            return `https://randomuser.me/api/portraits/${gender[randomGender]}/${randomNum}.jpg`
        }
    },
    computed: {
    },
    unmounted() { },
}
</script>