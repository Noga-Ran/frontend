<template>
    <div class="short-list-heading"><div>Latest orders</div><div @click="toggleList">{{listOption}}</div></div>
    <div class="host-short-list " v-for="order in orders.slice(0, this.cut)" :key="order._id">
        <img :src="order.buyer.buyerImg" />
        <div class="host-short-details">
            <div class="bold">{{ order.buyer.fullname }}</div>
            <div>{{ this.getStayName(order) }}</div>
            <!-- <div>{{ getDate(order.startDate, true) }} - {{ getDate(order.endDate, true)
            }}</div> -->
            <div>{{order.startDate}} - {{order.endDate}}</div>
            <div class="bold"> ${{ order.totalPrice }}</div>
        </div>
        <div class="short-list-btns" v-if="(order.status)==='pending'">
            <div class="host-order-accept host-orderd-accept" @click="aprroveOrder(order)">Approve</div>
            <div class="host-order-reject">Reject</div>
        </div>
        <div v-else class="accept-list-btns">
            <div class="order-approved">Approved</div>
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
            listOption: 'Show More',
            cut: 4
        };
    },
    created() {
    },
    methods: {
        getDate(num, isDdMm = false) {
            if (isDdMm) {
                console.log(num);
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
        },
        toggleList(){
            if(this.listOption === 'Show More') {
                this.listOption = 'Show Less'
                this.cut = this.orders.length
            }
            else {
                this.cut = 3
                this.listOption = 'Show More'
            } 
        },
        aprroveOrder(order){
            order.status = 'approved'
            this.$store.dispatch({type:'addTrip',trip:order})
        }
    },
    computed: {
    },
    unmounted() { },
}
</script>
