
<template>
    <section @click.prevent="showDetails" class="preview-container">
        <Transition name="fade">
            <el-carousel v-if="this.isLoad" class="preview-img-container" :autoplay="false" trigger="click">
                <el-carousel-item v-for="item in 5" :key="item">
                    <svg class="heart-svg" @click.stop="toggleFavorite" viewBox="0 0 32 32"
                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false"
                        style="display: block; height: 24px; width: 24px; stroke: white; stroke-width: 2; overflow: visible;"
                        v-bind:style="[isFav ? { fill: '#FF385C' } : { fill: '#00000080' }]">
                        <path
                            d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                        </path>
                    </svg>
                    <img :src='getImgUrl(item)' alt=''>
                </el-carousel-item>
            </el-carousel>
        </transition>
        <div v-if="!this.isLoad" class="demo-img">
        </div>
        <section v-if="!this.isLoad" class="demo-lines">
            <div class="line-a">
                <div class="sub-a1"></div>
                <div class="sub-a2"></div>
            </div>
            <div class="line-b"></div>
            <div class="line-c"></div>
            <div class="line-d"></div>
        </section>
        <section v-if="this.isLoad && !this.isExplore" class="stay-preview-data">
            <div class="preview-location">
                <span>{{ this.getLocation }}</span>
            </div>
            <div class="preview-rating">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false" style="display: block height: 12px width: 12px fill: currentcolor">
                    <path
                        d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                        fill-rule="evenodd"></path>
                </svg>
                <div class="rating-num">
                    {{ this.getRating() }}
                </div>
            </div>
            <div class="preview-distance">{{ this.distanceFromStay }} kilometers away</div>
            <div class="preview-available-dates">{{ this.getRandomDates() }}</div>
            <div class="preview-price"><span>${{ this.currStay.price.toLocaleString() }}</span> night</div>
        </section>
        <section v-if="this.isLoad && this.isExplore" class="explore-preview-data">
            <div class="explore-location-rating">
                <span>{{ currStay.roomType }} in {{ currStay.address.city }}</span>
                <div class="explore-rating">
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                        focusable="false" style="display: block height: 12px width: 12px fill: currentcolor">
                        <path
                            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                            fill-rule="evenodd"></path>
                    </svg>
                    <div class="rating-num-explore">
                        {{ this.getRating() }} ({{ currStay.numOfReviews }})
                    </div>
                </div>
            </div>
            <span class="explore-stay-name explore-light-txt">{{ this.getStayName }}</span>
            <span class="explore-light-txt">{{ currStay.beds }} beds</span>
            <div class="preview-chosen-dates explore-light-txt">{{ this.getRandomDates() }}</div>
            <div class="explore-price">
                <div class="explore-price-num"><span>${{ this.currStay.price.toLocaleString() }}</span> night </div>
                <pre> &middot </pre>
                <div class="explore-total-price explore-light-txt"> ${{ this.totalPrice }} total</div>
            </div>
        </section>
    </section>
</template>

<script>

export default {
    props: {
        currStay: Object,
        wishList: Object,
        dates: Object
    },
    data() {
        return {
            TlvCoords: { lat: 32.109333, lang: 34.855499 },
            isLoad: false,
            distanceFromStay: null,
            isFav: false,
            isExplore: false,
            nights: 0,
            totalPrice:0,
        }
    },
    computed: {
        getLocation() {
            const { city, country } = this.currStay.address
            return city + "," + country
        },
        getStayName() {
            if (this.currStay.name.length > 44) {
                var shortenName = JSON.parse(JSON.stringify(this.currStay.name))
                return (shortenName.slice(0, 40) + "...")
            }
            return this.currStay.name
        }
    },
    methods: {
        getDistanceInKm() {
            const { lat, lang } = this.TlvCoords
            const { lat: lat2, lan: lang2 } = this.currStay.address.location
            var R = 6371
            var dLat = (lat2 - lat) * (Math.PI / 180)
            var dLon = (lang2 - lang) * (Math.PI / 180)
            var a =
                Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(lat * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)

            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
            var d = R * c
            return d
        },
        getImgUrl(item) {
            const { imgUrls } = this.currStay
            return new URL('https://res.cloudinary.com/nogacloud/image/upload/v1659271395/stays/' + imgUrls[item - 1], import.meta.url)
        },
        getRating() {
            const { accuracy,
                checkin,
                cleanliness,
                communication,
                location,
                value } = this.currStay.reviewScores
            var average = (accuracy + checkin + cleanliness + communication + location + value) / 6
            return (average / 2).toFixed(1)
        },
        formatNumber(num) {
            const numberFormatter = Intl.NumberFormat('en-US');
            const formatted = numberFormatter.format(num);
            return formatted;
        },
        showDetails(event) {
            if (this.$route.query && this.$route.query?.adults) {
                window.open(`/#/stay/${this.currStay._id}?where=${this.$route.query.where || ''}&checkIn=${this.$route.query.checkIn || ''}&checkOut=${this.$route.query.checkOut || ''}&label=${this.$route.query.label || ''}&adults=${this.$route.query.adults}&children=${this.$route.query.children}&infants=${this.$route.query.infants}&pets=${this.$route.query.pets}`)
            } else {
                window.open(`/#/stay/${this.currStay._id}`)
            }
        },
        toggleFavorite() {
            this.isFav = !this.isFav

            if (this.isFav) {
                this.$store.dispatch({ type: "addWishStay", stayId: this.currStay._id })
            } else {
                this.$store.dispatch({ type: "removeWishStay", stayId: this.currStay._id })
            }
        },
        getRandomDates() {
            if(!this.dates.start || !this.dates.end){
                let daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 0).getDate()
                var checkInPrev= new Date().getDate()
                var checkOutPrev=this.getRandomDay(checkInPrev+1, daysInMonth)
                let month = new Date().toLocaleString('default', { month: 'short' })
                this.nights= checkOutPrev- checkInPrev
                this.totalPrice= (this.currStay.price* this.nights).toLocaleString()
                return `${month} ${checkInPrev} - ${month} ${checkOutPrev}`
            }
            else{
                const formatDates =  this.getInMillis()
                let startDate = `${new Date(formatDates.start).toLocaleString('default', { month: 'short' })} ${(new Date(formatDates.start).getDate() < 10 ? '0' : '') + new Date(formatDates.start).getDate()}`
                let endDate = `${new Date(formatDates.end).toLocaleString('default', { month: 'short' })} ${(new Date(formatDates.end).getDate() < 10 ? '0' : '') + new Date(formatDates.end).getDate()}`
                return `${startDate} - ${endDate}`
            }
        },
        getRandomDay(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min
        },
        getInMillis(){
            let start = this.dates.start.split('/')
            let end = this.dates.end.split('/')
            start =  new Date(`${start[1]}/${start[2]}/${start[0]}`).getTime()
            end =  new Date(`${end[1]}/${end[2]}/${end[0]}`).getTime()
            this.nights = Math.floor((end - start)/24/60/60/1000)
            this.totalPrice= (this.currStay.price* this.nights).toLocaleString()
            return ({start,end})
        },
        calculateDistance() {
            var distanceInKm = this.getDistanceInKm().toFixed(0)
            this.distanceFromStay = this.formatNumber(distanceInKm)
        }
    },
    created() {
        if(this.wishList) this.isFav = Object.values(this.wishList).includes(this.currStay._id)
        else this.isFav = false
        if (this.$route?.params?.where) {
            this.isExplore = true
        }
        else {
            this.isExplore = false
            this.calculateDistance()
        }
        setTimeout(() => this.isLoad = true, 550)
    },
}
</script>