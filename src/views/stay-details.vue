<template>
  <section class="stay-details-layout" v-if="!isMobile">
    <app-header />
    <section class="alt-header details-padding" v-if="!isGalleryOn">
      <div class="alt-head-nav">
        <a @click="scrollMeTo('Photos')" class="alt-head-photos">Photos</a>
        <a @click="scrollMeTo('Amenities')" class="alt-head-amenities">Amenities</a>
        <a @click="scrollMeTo('Reviews')" class="alt-head-reviews">Reviews</a>
        <a @click="scrollMeTo('Location')" class="alt-head-location">Location</a>
      </div>
      <div class="header-reservation-cont" v-if="!tripSettingOn">
        <div class="alt-head-reserve-info">
          <div>${{ stay.price }} <span>&nbsp;night</span></div>
          <div>
            <span>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                focusable="false" style="height: 14px; width: 14px; fill: currentcolor">
                <path
                  d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                  fill-rule="evenodd"></path>
              </svg>
              <span class="rating-average"> {{ getRating }} </span>
            </span>
            <span>&nbsp &middot &nbsp </span>
            <span @click="scrollMeTo('Reviews')" class="review-count header-reviews">{{ stay.numOfReviews }} reviews
            </span>
          </div>
        </div>
        <div class="header-reserve-btn" @click="scrollMeTo('orderSec')">Reserve</div>
      </div>
    </section>
    <section class="stay-details-container">
      <section class="details-layout-top details-padding" ref="detailsPageTop">
        <section class="stay-name-and-sub">
          <h1 class="stay-name">{{ stay.name }}</h1>
          <section class="stay-sub-title">
            <span>
              <svg class="rating-star" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                role="presentation" focusable="false" style="height: 14px; width: 14px; fill: currentcolor">
                <path
                  d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                  fill-rule="evenodd"></path>
              </svg>
              <span class="rating-average"> {{ this.getRating }} </span>
            </span>
            <span>&nbsp &middot &nbsp </span>
            <span class="review-count">{{ stay.numOfReviews }} reviews </span>
            <span class="separating-dote"> &nbsp.&nbsp </span>
            <span class="stay-address">
              {{ stay.address.city }},
              {{ stay.address.country }}
            </span>
            <span class="share-save-actions" @click.prevent="share()">
              <span class="share-stay">
                <svg class="save-svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                  role="presentation" focusable="false" style="
                    fill: none;
                    stroke: currentcolor;
                    stroke-width: 2;
                    overflow: visible;
                  ">
                  <g fill="none">
                    <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                    <path d="M16 3v23V3z"></path>
                    <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
                  </g>
                </svg>

                <span>Share</span>
              </span>
              <span class="save-stay">
                <svg class="heart-svg" @click.stop="toggleFavorite" viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="
                    display: block;
                    height: 16px;
                    width: 16px;
                    stroke-width: 2; 
                    overflow: visible;
                  " v-bind:style="[
                    isFav
                      ? { fill: '#FF385C', stroke: '#FF385C' }
                      : { fill: '#ffffff', stroke: 'currentcolor' },
                  ]">
                  <path
                    d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
                  </path>
                </svg>
                <span style="outline: 0;"> Save</span>
              </span>
            </span>
          </section>
        </section>

        <section class="stay-images" ref="Photos">
          <div class="stay-img-container" v-for="(img, idx) in stay.imgUrls" :key="img">
            <img :src="getImgUrl(idx)" alt="" />
          </div>
        </section>
      </section>

      <section class="stay-info details-padding">
        <section class="info-left">
          <div class="details-left-heading">
            <h2 class="stay-type-and-host">
              {{ stay.roomType }} hosted by {{ stay.host.fullname }}
            </h2>
            <div class="stay-contains">
              {{ stay.capacity }} guests &middot {{ stay.bedrooms }} bedrooms
              &middot {{ stay.beds }} beds &middot {{ stay.bathrooms }} baths
            </div>
            <img class="host-img-profile" :src="getRandomImg()" alt="" />
          </div>
          <section class="stay-beds">
            <div class="beds-heading">Where you'll sleep</div>
            <div class="beds-layout">
              <div class="bed-container">
                <div class="bed">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false" style="
                      display: block;
                      height: 24px;
                      width: 24px;
                      fill: currentcolor;
                    ">
                    <path
                      d="M28 4a2 2 0 0 1 1.995 1.85L30 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232L2 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L4 4zm2 18H2v4h28zm-1.388-6H3.387l-1.333 4h27.891zM28 6H4v8h2v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h2zm-13 4H8v4h7zm9 0h-7v4h7z">
                    </path>
                  </svg>
                  <div class="bedroom-num">bedroom 1</div>
                  <div class="bedroom-type"> 2 king size beds </div>
                </div>
              </div>
              <div class="bed-container">
                <div class="bed">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false" style="
                      display: block;
                      height: 24px;
                      width: 24px;
                      fill: currentcolor;
                    ">
                    <path
                      d="M28 4a2 2 0 0 1 1.995 1.85L30 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232L2 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L4 4zm2 18H2v4h28zm-1.388-6H3.387l-1.333 4h27.891zM28 6H4v8h2v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h2zm-13 4H8v4h7zm9 0h-7v4h7z">
                    </path>
                  </svg>
                  <div class="bedroom-num">bedroom 2</div>
                  <div class="bedroom-type"> 2 king size beds </div>
                </div>
              </div>
              <div class="bed-container">
                <div class="bed">
                  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false" style="
                      display: block;
                      height: 24px;
                      width: 24px;
                      fill: currentcolor;
                    ">
                    <path
                      d="M28 4a2 2 0 0 1 1.995 1.85L30 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232L2 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L4 4zm2 18H2v4h28zm-1.388-6H3.387l-1.333 4h27.891zM28 6H4v8h2v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h2zm-13 4H8v4h7zm9 0h-7v4h7z">
                    </path>
                  </svg>
                  <div class="bedroom-num">bedroom 3</div>
                  <div class="bedroom-type"> 2 king size beds </div>
                </div>
              </div>
            </div>
          </section>
          <section class="stay-amenities" ref="Amenities">
            <aminities :stayAmenities="stay.amenities"></aminities>
          </section>
          <!-- <section class="stay-summary">
            {{ stay.summary }}
          </section> -->
        </section>
        <section class="info-right">
          <div class="trip-setting-cmp-container" ref="orderSec">
            <trip-settings :currStay="stay" />
          </div>
        </section>
      </section>
      <section ref="Reviews" class="stay-reviews">
        <reviews :stay="stay"></reviews>
      </section>
    </section>
    <div ref="Location" class="details-map-cont">
      <stayMap :stayLocation="stay.address" :isMobile="isMobile"></stayMap>
    </div>
    <app-footer :isFixed="'false'" />
  </section>
  <section v-if="isMobile">
    <section class="mobile-details-layout">
      <div class="mobile-details-nav">
        <button class="mobile-details-return" @click=""><svg class="svg-icon"
            style="width: 1.1015625em; height: 1em;vertical-align: middle;fill: currentColor;overflow: hidden;"
            viewBox="0 0 1128 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1097.855149 473.209109h-929.064612L568.332002 76.916503a44.938006 44.938006 0 1 0-63.543869-63.55752L0 518.147115l493.403474 492.993954a43.90465 43.90465 0 0 0 62.110549-62.069598L168.544825 563.071471h929.310324a29.94957 29.94957 0 0 0 30.031475-30.031475v-29.881317a29.93592 29.93592 0 0 0-30.031475-29.94957z"
              fill="" />
          </svg>
        </button>
        <div class="mobile-details-reactions">
          <button class="mobile-details-share" @click=""><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" role="presentation" focusable="false"
              style="fill: none;  stroke: currentcolor; stroke-width: 1; overflow: visible;">
              <g fill="none">
                <path d="M27 18v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9"></path>
                <path d="M16 3v23V3z"></path>
                <path d="M6 13l9.293-9.293a1 1 0 0 1 1.414 0L26 13"></path>
              </g>
            </svg></button>
          <button class="mobile-details-favorite" @click=""><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true" role="presentation" focusable="false"
              style="display: block; stroke-width: 1; overflow: visible; fill: transparent; stroke: currentcolor;">
              <path
                d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z">
              </path>
            </svg></button>
        </div>
      </div>
      <div class="mobile-gallery">
        <div class="mobile-img-container">
          <img :src="getImgUrl(0)" alt="" />
        </div>
      </div>
      <section class="mobile-details-stay-info-cont mobile-details-padding">
        <div class="mobile-stay-info">
          <h1 class="mobile-stay-name">{{ stay.name }}</h1>
          <div class="rating-review-cont">
            <span>
              <svg class="mobile-stay-rating-star" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true" role="presentation" focusable="false"
                style="height: 14px; width: 14px; fill: currentcolor">
                <path
                  d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                  fill-rule="evenodd"></path>
              </svg>
              <span class="rating-average"> {{ this.getRating }} </span>
            </span>
            <span>&nbsp &middot &nbsp </span>
            <span class="mobile-stay-review-count">{{ stay.numOfReviews }} reviews </span>
          </div>
          <span class="stay-address">
            {{ stay.address.city }},
            {{ stay.address.country }}
          </span>
        </div>
        <div class="mobile-details-host-and-info">
          <h2 class="mobile-stay-type-and-host">
            {{ stay.roomType }} hosted by {{ stay.host.fullname }}
          </h2>
          <img src="../assets/img/jj.jpg" alt="" />
          <div class="mobile-stay-contains">
            {{ stay.capacity }} guests &middot {{ stay.bedrooms }} bedrooms
            &middot {{ stay.beds }} beds &middot {{ stay.bathrooms }} baths
          </div>
        </div>
        <aminities :stayAmenities="stay.amenities"></aminities>
        <section class="mobile-stay-beds">
          <div class="mobile-beds-heading">Where you'll sleep</div>
          <div class="mobile-beds-layout">
            <div class="mobile-bed-container" v-for="(bed, idx) in 3">
              <div class="mobile-bed">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                  focusable="false" style="
                      display: block;
                      height: 24px;
                      width: 24px;
                      fill: currentcolor;
                    ">
                  <path
                    d="M28 4a2 2 0 0 1 1.995 1.85L30 6v7.839l1.846 5.537a3 3 0 0 1 .115.468l.03.24.009.24V30h-2v-2H2v2H0v-9.675a3 3 0 0 1 .087-.717l.067-.232L2 13.836V6a2 2 0 0 1 1.697-1.977l.154-.018L4 4zm2 18H2v4h28zm-1.388-6H3.387l-1.333 4h27.891zM28 6H4v8h2v-4a2 2 0 0 1 1.85-1.995L8 8h16a2 2 0 0 1 1.995 1.85L26 10v4h2zm-13 4H8v4h7zm9 0h-7v4h7z">
                  </path>
                </svg>
                <div class="bedroom-num">Bedroom {{ idx + 1 }}</div>
                <div class="bedroom-type"> 2 king size beds </div>
              </div>
            </div>
          </div>
        </section>
        <div ref="Location" class="details-map-cont">
          <stayMap :stayLocation="stay.address" :isMobile="isMobile"></stayMap>
        </div>
        <div class="mobile-reviews">
          <h2 class="reviews-title">
            <span>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                focusable="false" style="height: 14px; width: 14px; fill: currentcolor">
                <path
                  d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
                  fill-rule="evenodd"></path>
              </svg>
              <span class="rating-average"> {{ getRating }} </span>
            </span>
            <span>&nbsp &middot &nbsp </span>
            <span class="review-count">{{ stay.numOfReviews }} reviews </span>
          </h2>
          <div class="review-container-mobile">
            <div class="review-deatails-container">
              <img class="profile-img" :src="stay.reviews[1].by.imgUrl" alt="" />
              <div class="review-info">
                <span class="review-name">{{ stay.reviews[0].by.fullname }}</span>
                <span class="review-time">{{ formateTime(stay.reviews[0].at) }}</span>
              </div>
            </div>
            <div class="reviews-txt-container">
              <div>{{ formatedReviewTxt(stay.reviews[0].txt) }}</div>
            </div>
          </div>
          <!-- v-button -->
          <button class="show-reviews-btn" @click="showReviewsModal = true">
            Show all {{ stay.numOfReviews }} reviews
          </button>
        </div>
      </section>
      <div class="mobile-reservation-bar">
        <div class="mobile-reservation-cont">
          <div class="mobile-reservation-details">
            <div class="mobile-res-price">$ {{ stay.price }} <span>&nbsp;night</span></div>
            <div class="mobile-res-date">Dec 3-8</div>
          </div>
          <div class="mobile-reserve-btn" @click="alert('reservation modal')">Reserve</div>
        </div>
      </div>
    </section>

  </section>
</template>

<script>
import tripSettings from '../cmps/trip-settings.vue'
import appHeader from '../cmps/app-header.vue'
import aminities from '../cmps/aminities.vue'
import reviews from '../cmps/reviews.vue'
import appFooter from '../cmps/app-footer.vue'
import stayMap from '../cmps/stay-map.vue'

export default {
  name: 'stay-details',
  components: {
    appHeader,
    tripSettings,
    aminities,
    reviews,
    appFooter,
    stayMap,
  },
  data() {
    return {
      stay: null,
      averageRating: null,
      isFav: false,
      id: null,
      tripSettingOn: true,
      isGalleryOn: true,
      isMobile: false
    }
  },
  async created() {
    this.id = this.$route.params.id
    await this.getStayById(this.id)
    this.displayWindowSize()
    window.addEventListener("resize", this.displayWindowSize);
    this.tripSettingObserver = new IntersectionObserver(this.onTripSettingObserved, {
      rootMargin: "-275px 0px 0px",
    })
    this.tripSettingObserver.observe(this.$refs.orderSec);
    this.detailsPageTopObserver = new IntersectionObserver(this.onGalleryObserved, {
      rootMargin: "-10px 0px 0px",
    })
    this.detailsPageTopObserver.observe(this.$refs.detailsPageTop);
  },
  mounted() {
  },
  methods: {
    async getStayById(stayId) {
      try {

        this.stay = await this.$store.dispatch({
          type: 'getStayById',
          stayId,
        })

        var wishListStays = this.$store.getters.getUser
        if (wishListStays) {
          wishListStays = wishListStays.wishlist
          this.isFav = Object.values(wishListStays).includes(this.stay._id)
        }
      } catch (err) {
        console.log(err);
      }
    },
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      // var top = refName === 'Photos' ? element.offsetTop : element.offsetTop - 78
      var top = element.offsetTop - 78
      // console.log('top,element.offsetTop,refName: ', top, element.offsetTop, refName)
      window.scrollTo(0, top);
    },
    getImgUrl(idx) {
      const { imgUrls } = this.stay
      return new URL('https://res.cloudinary.com/nogacloud/image/upload/v1659271395/stays/' + imgUrls[idx], import.meta.url)
    },
    toggleFavorite() {
      this.isFav = !this.isFav

      if (this.isFav) {
        this.$store.dispatch({ type: 'addWishStay', stayId: this.stay._id })
      } else {
        this.$store.dispatch({ type: 'removeWishStay', stayId: this.stay._id })
      }
    },
    formateTime(time) {
      let date = new Date(time)
      var year = 2022
      let month = date.toLocaleString('en', { month: 'long' })
      if (month == "August" || month == "September" || month == "October"
        || month == "November" || month == "December") {
        year = 2021
      }
      return month + ' ' + year
    },
    formatedReviewTxt(txt) {
      if (txt.length > 156) {
        this.isLongTxt = true
        return txt.slice(0, 156) + '...'
      } else {
        this.isLongTxt = false
        return txt
      }
    },
    onTripSettingObserved(entries) {
      entries.forEach((entry) => {
        this.tripSettingOn = entry.isIntersecting ? true : false;
      });
    },
    onGalleryObserved(entries) {
      entries.forEach((entry) => {
        this.isGalleryOn = entry.isIntersecting ? true : false;
      });
    },
    displayWindowSize() {
      var w = document.documentElement.clientWidth;
      var h = document.documentElement.clientHeight;
      if (w < 740) {
        this.isMobile = true
      }
      else this.isMobile = false
    },
    getRandomImg() {
      let randomNum = Math.floor(Math.random() * (99 - 1) + 1)
      var gender = ['men', 'women']
      let randomGender = Math.floor(Math.random() * 2)
      return `https://randomuser.me/api/portraits/${gender[randomGender]}/${randomNum}.jpg`
    },
    async share() {
      // let url = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
      // let options = 'toolbar=1,status=0,resizable=1,width=626,height=436';
      // window.open(url,'sharer',options);
      await navigator.clipboard.writeText(window.location.href)
    }
  },
  computed: {
    getRating() {
      const { accuracy,
        checkin,
        cleanliness,
        communication,
        location,
        value } = this.stay.reviewScores
      var average = (accuracy + checkin + cleanliness + communication + location + value) / 6
      var averageRating = average / 2
      return averageRating.toFixed(1)
    },
  },
  unmounted() { },
}
</script>
