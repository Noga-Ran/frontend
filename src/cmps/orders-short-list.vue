<template>
    <div class="short-list-heading"><div>Latest pending orders</div><div>Show more</div></div>
    <div class="host-short-list " v-for="order in orders.slice(0, 3)" :key="7 + order">
        <img :src="order.buyer.buyerImg" />
        <div class="host-short-details">
            <div class="bold">{{ order.buyer.fullname }}</div>
            <div>{{ this.getStayName(order) }}</div>
            <div class="">{{ getDate(order.startDate, true) }} - {{ getDate(order.endDate, true)
            }}</div>
            <div class="bold"> ${{ order.totalPrice }}</div>
        </div>
        <div class="short-list-btns">
            <div class="host-order-accept host-orderd-accept">Approve</div>
            <div class="host-order-reject">Reject</div>
        </div>
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
                return num.slice(0, 6) + "22"
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
            if (order.stay.name.length > 26) {
                var shortenName = JSON.parse(JSON.stringify(order.stay.name))
                return (shortenName.slice(0, 21) + "...")
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
