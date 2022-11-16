<template>
    <form class="form-modal-container">
        <div class="overlay" @click.prevent="closeFilters"></div>
        <div class="modal-filter-choices-layout">
            <div class="filter-modal-where-container searchbar-selected-filter"
                @click="setActive($event.currentTarget)">
                <p @click="showModal = true, showWho = false">Where</p>
                <input @click="showModal = true, showWho = false" v-model="where" @input="emit" type="text" name="query"
                    placeholder="Search destinations" aria-describedby="bigsearch-query-location-description"
                    aria-autocomplete="none" autocomplete="off" autocorrect="off">
                <div class="modal-vue">
                    <div class="modal" v-if="showModal">
                        <button class="close" @click="showModal = false">x</button>
                        <div class="searchs">
                            <div class="search-region">
                                <p>Search by region</p>
                                <div class="imgs-container">
                                    <div v-for="(label, idx) in countryLabels" :key="label" @click="setWhere(label)">
                                        <img v-if="label != 'Im flexiable'" :src="getImgUrl(label)" alt="" />
                                        <img v-else
                                            src="https://res.cloudinary.com/nogacloud/image/upload/v1659290575/countries/world.jpg"
                                            alt="" />
                                        <p>{{ label }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="check-in-out-container">
                <span class="filter-seperator"></span>
                <div class="check-in-container" role="button"
                    @click="showModal = false; setActive($event.currentTarget)">
                    <p>Check in</p>
                    <el-calender></el-calender>
                    <Datepicker :full-month-name="true" @click="showWho = false" v-if="!show" @blur="setDate('start')"
                        hideInputIcon :autoPosition="false" :enableTimePicker="false" v-model="startDate" range
                        multiCalendars placeholder="Add dates" :minDate="new Date()" textInput autoApply
                        closeOnScroll />
                    <p v-if="show" @click.self="clearDates">{{ startDate }}</p>
                </div>
                <span class="filter-seperator"></span>
                <div class="check-out-container" @click="showModal = false; setActive($event.currentTarget)">
                    <p>Check out</p>
                    <Datepicker :full-month-name="true" @click="showWho = false" v-if="!show" @blur="setDate('end')"
                        hideInputIcon :autoPosition="false" :enableTimePicker="false" v-model="endDate" range
                        multiCalendars placeholder="Add dates" :minDate="new Date()" textInput autoApply
                        closeOnScroll />
                    <p v-if="show" @click.self="clearDates">{{ endDate }}</p>
                </div>
            </div>
            <span class="filter-seperator"></span>
            <div class="filter-who-and-search" @click="setActive($event.currentTarget)">
                <div class="filter-who-container" @click.self="showWho = !showWho, showModal = false">
                    <p @click.prevent="showWho = !showWho, showModal = false">Who</p>
                    <span @click.prevent="showWho = !showWho, showModal = false">{{ guestsAmount }}</span>
                    <guests-filter @guest="updateGuests" v-if="showWho" :max="100" />
                </div>
                <div class="search-container">
                    <button @click.prevent="setFilter">
                        <div class="modal-search">
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                                role="presentation" focusable="false"
                                style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;">
                                <g fill="none">
                                    <path
                                        d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                                    </path>
                                </g>
                            </svg>
                        </div>
                        <p>Search</p>
                    </button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import guestsFilter from './filter-modal-cmps/guests-filter-modal.vue'

export default {
    data() {
        return {
            where: '',
            startDate: '',
            endDate: '',
            show: false,
            showWho: false,
            showModal: false,
            countryLabels: ['Im flexiable', 'greece', 'brazil', 'united states', 'spain', 'canada'],
            guestsAmount: 'Add guests'
        }
    },
    methods: {
        setActive(elElement) {
            var elActiveArea = document.querySelector('.searchbar-selected-filter')
            if (elActiveArea && elActiveArea !== elElement) {
                elActiveArea.classList.remove('searchbar-selected-filter')
            }
            elElement.classList.add('searchbar-selected-filter')
        },
        emit() {
            this.$emit('filter', this.where)
        },
        setFilter() {
            this.$emit('emit')
        },
        setDate(isStart) {
            if (isStart === 'start') {
                var dates = Object.values(this.startDate)

            } else {
                var dates = Object.values(this.endDate)
            }
            var emitStartDate = new Date(dates[0]).toISOString().slice(0, 16).replace('T', ', ').replaceAll('-', '/')
            emitStartDate = emitStartDate.slice(0, 10)
            var emitEndDate = new Date(dates[1]).toISOString().slice(0, 16).replace('T', ', ').replaceAll('-', '/')
            emitEndDate = emitEndDate.slice(0, 10)
            this.startDate = ('' + dates[0]).substring(4, 15)
            this.endDate = ('' + dates[1]).substring(4, 15)

            if (this.startDate !== 'fined' && this.startDate !== '' && this.startDate !== '' && this.endDate !== 'fined') {
                this.show = true
                this.$emit('date', { start: emitStartDate, end: emitEndDate })
            } else {
                this.$emit('date', { start: '', end: '' })
            }
        },
        clearDates() {
            this.show = false
            this.endDate = ''
            this.startDate = ''
            this.$emit('date', { start: '', end: '' })
        },
        getImgUrl(country) {
            // const { imgUrls } = this.stay
            country = country.replace(' ', '_')
            return new URL('https://res.cloudinary.com/nogacloud/image/upload/v1659292790/countries/' + country, import.meta.url).href
        },
        setWhere(country) {
            if (country !== 'Im flexiable') {
                this.where = country
            } else {
                let countries = ['spain', 'portugal', 'United States', 'Istanbul', 'hong kong', 'Brazil', 'canada', 'Indonesia', 'greece']
                let country = countries[Math.floor(Math.random() * countries.length)]
                this.where = country
            }
            this.emit()
        },
        closeFilters() {
            this.$emit("closeHeader")
            this.showWho = false
            this.showModal = false
        },
        updateGuests(guests) {
            if (guests.sum === 0) this.guestsAmount = 'Add Guests'
            else if (guests.sum === 1) this.guestsAmount = guests.sum + ' guest'
            else this.guestsAmount = guests.sum + ' guests'
            this.$emit('guest', guests)
        },
        checkMobile(event){
            event.preventDefault()
            if(window.innerWidth<=745) this.closeFilters()
        },
    },
    components: {
        guestsFilter,
    },
    created() {
        window.addEventListener('resize', this.checkMobile)
        if (this.$route.query) {
            this.where = this.$route.query.where
            this.$emit('filter', this.where)
            this.startDate = this.$route.query.checkIn
            this.endDate = this.$route.query.checkOut
            if (this.startDate && this.endDate) this.show = true
            this.guestsAmount = +this.$route.query.adults + +this.$route.query.children + +this.$route.query.infants + +this.$route.query.pets || 'Add guests'
            if (this.guestsAmount === 1) this.guestsAmount += ' guest'
            else if (this.guestsAmount > 1) this.guestsAmount += ' guests'
        }
    },
    unmounted() {
    window.removeEventListener('resize', this.checkMobile);
  }
}
</script>
