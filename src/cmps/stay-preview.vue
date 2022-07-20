
<template>
    <section class="demo-cont">
        <Transition name="fade">
            <div v-if="this.isLoad" class="preview-img-container">
                <img :src='getImgUrl' alt=''>
            </div>
        </transition>
        <div v-if="!this.isLoad" class="demo-img">
        </div>
        <section v-if="this.isLoad" class="stay-preview-data">
            <div class="preview-location">
                <span>{{ this.getLocation }}</span>
            </div>
            <div class="preview-rating">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false" style="display: block; height: 12px; width: 12px; fill: currentcolor;">
                    <path
                        d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                        fill-rule="evenodd"></path>
                </svg>
                <div class="rating-num">
                    {{ this.getRating }}
                </div>
            </div>
            <div class="preview-distance">2,122 kilometers away</div>
            <div class="preview-available-dates">oct.29-nov.5</div>
            <div class="preview-price"><span>${{ this.currStay.price }}</span> night</div>
        </section>
        <section v-else class="demo-lines">
            <div class="line-a">
                <div class="sub-a1"></div>
                <div class="sub-a2"></div>
            </div>
            <div class="line-b"></div>
            <div class="line-c"></div>
            <div class="line-d"></div>
        </section>
    </section>
</template>

<script>
export default {
    props: {
        currStay: Object,
    },
    data() {
        return {
            isLoad: false,
        }
    },
    computed: {
        getLocation() {
            const { city, country } = this.currStay.address
            return city + "," + country
        },
        getImgUrl() {
            const { imgUrls } = this.currStay
            return  new URL('../assets/img/stays/'+imgUrls[0], import.meta.url).href
        },
        getRating() {
            const { rating } = this.currStay.reviewScores
            return (rating / 20).toFixed(1)
        }
    },
    created() {
        setTimeout(() => this.isLoad = true, 550)
        // console.log('currStay: ', this.currStay)
    }
}
</script>