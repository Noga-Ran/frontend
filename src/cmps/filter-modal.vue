<template>
    <form class="form-modal-container ">
        <div class="overlay" @click="closeFilters"></div>
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
                            <div class="recent-search">
                                <div class="recents-header">Recent searches</div><br>
                                <span>
                                    <div class="recent-svg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true" role="presentation" focusable="false"
                                            style="display: block; height: 22px; width: 22px; fill: currentcolor;">
                                            <path
                                                d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z">
                                            </path>
                                        </svg></div>
                                    <div>New York</div>
                                </span>
                                <span>
                                    <div class="recent-svg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true" role="presentation" focusable="false"
                                            style="display: block; height: 22px; width: 22px; fill: currentcolor;">
                                            <path
                                                d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z">
                                            </path>
                                        </svg></div>
                                    <div>Spain</div>
                                </span>
                                <span>
                                    <div class="recent-svg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true" role="presentation" focusable="false"
                                            style="display: block; height: 22px; width: 22px; fill: currentcolor;">
                                            <path
                                                d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z">
                                            </path>
                                        </svg></div>
                                    <div>Us</div>
                                </span>
                                <span>
                                    <div class="recent-svg"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true" role="presentation" focusable="false"
                                            style="display: block; height: 22px; width: 22px; fill: currentcolor;">
                                            <path
                                                d="m15.9999.3335c8.6524795 0 15.6667 7.01422051 15.6667 15.6667 0 8.6524795-7.0142205 15.6667-15.6667 15.6667-8.65247949 0-15.6667-7.0142205-15.6667-15.6667 0-8.65247949 7.01422051-15.6667 15.6667-15.6667zm0 2c-7.54790999 0-13.6667 6.11879001-13.6667 13.6667 0 7.54791 6.11879001 13.6667 13.6667 13.6667 7.54791 0 13.6667-6.11879 13.6667-13.6667 0-7.54790999-6.11879-13.6667-13.6667-13.6667zm1.0001 3v10.0895l8.7375978 5.0444733-.9999956 1.7320534-9.7376022-5.6219748v-11.2440519z">
                                            </path>
                                        </svg></div>
                                    <div>hong kong</div>
                                </span>
                            </div>
                            <div class="search-region">
                                <p>Search by region</p>
                                <div class="imgs-container">
                                    <div v-for="(label, idx) in countryLabels" :key="indx" @click="setWhere(label)">
                                        <img v-if="label != 'Im flexiable'" :src="getImgUrl(label)" alt="" />
                                        <img v-else src="../assets/img/countries/world.png" alt="" />
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
                    <!-- <span>Add dates</span> -->
                    <Datepicker @click="showWho = false" v-if="!show" @blur="setDate('start')" hideInputIcon
                        :autoPosition="false" :enableTimePicker="false" v-model="startDate" range multiCalendars
                        placeholder="Add dates" :minDate="new Date()" textInput autoApply closeOnScroll />
                    <p v-if="show" @click.self="clearDates">{{ startDate }}</p>
                </div>
                <span class="filter-seperator"></span>
                <div class="check-out-container" @click="showModal = false; setActive($event.currentTarget)">
                    <p>Check out</p>
                    <Datepicker @click="showWho = false" v-if="!show" @blur="setDate('end')" hideInputIcon
                        :autoPosition="false" :enableTimePicker="false" v-model="endDate" range multiCalendars
                        placeholder="Add dates" :minDate="new Date()" textInput autoApply closeOnScroll />
                    <p v-if="show" @click.self="clearDates">{{ endDate }}</p>
                </div>
            </div>
            <span class="filter-seperator"></span>
            <div class="filter-who-and-search" @click="setActive($event.currentTarget)">
                <div class="filter-who-container" @click.self="showWho = !showWho, showModal = false">
                    <p @click.prevent="showWho = !showWho, showModal = false">Who</p>
                    <span @click.prevent="showWho = !showWho, showModal = false">{{ gusetsAmount }}</span>
                    <div v-if="showWho">
                        <div class="guests-modal">
                            <div class="modal-g-container">
                                <div class="adults-filter-container">
                                    <div>
                                        <span>Adults</span>
                                        <span>Ages 13 or above</span>
                                    </div>
                                    <div>
                                        <button type="button" class="g-modal-buttons" :disabled="isAbled"
                                            @click.stop="guests.adults--">
                                            <span class="material-icons-sharp">-</span>
                                        </button>
                                        <span class="guests-num">{{ guests.adults }}</span>
                                        <button type="button" class="g-modal-buttons" @click.stop="guests.adults++">
                                            <span class="material-icons-sharp">+</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="children-filter-container">
                                    <div>
                                        <span>Children</span>
                                        <span>Ages 2–12</span>
                                    </div>
                                    <div>
                                        <button type="button" class="g-modal-buttons" :disabled="guests.children == 0"
                                            @click.stop="guests.children--">
                                            <span class="material-icons-sharp">-</span>
                                        </button>
                                        <span class="guests-num">{{ guests.children }}</span>
                                        <button type="button" class="g-modal-buttons" @click.stop="guests.children++">
                                            <span class="material-icons-sharp">+</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="babies-filter-container">
                                    <div>
                                        <span>Infants</span>
                                        <span>Under 2</span>
                                    </div>
                                    <div>
                                        <button type="button" class="g-modal-buttons" :disabled="guests.infants == 0"
                                            @click.stop="guests.infants--">
                                            <span class="material-icons-sharp">-</span>
                                        </button>
                                        <span class="guests-num">{{ guests.infants }}</span>
                                        <button type="button" class="g-modal-buttons" @click.stop="guests.infants++">
                                            <span class="material-icons-sharp">+</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="pets-filter-container">
                                    <div>
                                        <span>Pets</span>
                                        <span>(doesn't include service animals)</span>
                                    </div>
                                    <div>
                                        <button type="button" class="g-modal-buttons" :disabled="guests.pets == 0"
                                            @click.stop="guests.pets--">
                                            <span class="material-icons-sharp">-</span>
                                        </button>
                                        <span class="guests-num">{{ guests.pets }}</span>
                                        <button type="button" class="g-modal-buttons" @click.stop="guests.pets++">
                                            <span class="material-icons-sharp">+</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
export default {
    data() {
        return {
            where: '',
            startDate: '',
            endDate: '',
            show: false,
            showWho: false,
            guests: { adults: 0, children: 0, infants: 0, pets: 0, sum: 0 },
            showModal: false,
            countryLabels: ['Im flexiable', 'australia', 'brazil', 'canada', 'spain', 'united states'],
            ableZeroAdults: true,
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
                let dates = Object.values(this.startDate)
                var emitStartDate = new Date(dates[0]).toISOString().slice(0, 16).replace('T', ', ').replaceAll('-', '/')
                emitStartDate = emitStartDate.slice(0,10)
                var emitEndDate = new Date(dates[1]).toISOString().slice(0, 16).replace('T', ', ').replaceAll('-', '/')
                emitEndDate = emitEndDate.slice(0,10)
                this.startDate = ('' + dates[0]).substring(4, 15)
                this.endDate = ('' + dates[1]).substring(4, 15)
            } else {
                let dates = Object.values(this.endDate)
                this.startDate = ('' + dates[0]).substring(4, 15)
                this.endDate = ('' + dates[1]).substring(4, 15)
            }

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
            return new URL('../assets/img/countries/' + country + '.png', import.meta.url).href
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
        }
    },
    computed: {
        gusetsAmount() {
            if (this.guests.adults === 0 && (this.guests.infants > 0 || this.guests.children > 0 || this.guests.pets > 0)) {
                this.guests.adults = 1
                this.ableZeroAdults = false
            } else {
                this.ableZeroAdults = true
            }

            this.guests.sum = this.guests.adults + this.guests.infants + this.guests.children + this.guests.pets
            this.$emit('guest', this.guests)
            if (this.guests.sum === 0) return 'Add Guests'
            if (this.guests.sum === 1) return this.guests.sum + ' guest'
            return this.guests.sum + ' guests'
        },
        isAbled() {
            return (this.guests.adults == 0 || (!this.ableZeroAdults && this.guests.adults === 1))
        }
    },
    created() {
        if (this.$route.query) {
            this.where = this.$route.query.where
            this.$emit('filter', this.where)
            this.startDate = this.$route.query.checkIn
            this.endDate = this.$route.query.checkOut
            if (this.startDate && this.endDate) this.show = true
            this.guests.adults = +this.$route.query.adults || 0
            this.guests.children = +this.$route.query.children || 0
            this.guests.infants = +this.$route.query.infants || 0
            this.guests.pets = +this.$route.query.pets || 0
        }
    },
}
</script>
