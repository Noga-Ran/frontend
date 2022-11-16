<template>
    <section class="mobile-filter-container">
        <!-- <pre>{{filterWhere}} {{filterWhen}} {{filterWho}}</pre> -->
        <div class="close-filter">
            <button @click.prevent="close">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false"
                    style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                    <path d="m6 6 20 20"></path>
                    <path d="m26 6-20 20"></path>
                </svg>
            </button>
        </div>
        <div class="where-filter" @click.prevent="filterWhere = true, filterWhen = false, filterWho = false">
            <button v-if="!filterWhere">
                <span>Where</span>
                <span>{{whereInput || 'Im flexiable'}}</span>
            </button>
            <div class="alt-div" v-else>
                <h2>Where to?</h2>
                <div>
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                        focusable="false"
                        style="display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 4; overflow: visible;">
                        <g fill="none">
                            <path
                                d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                            </path>
                        </g>
                    </svg>
                    <input type="text" autocomplete="off" placeholder="Search destinations" aria-autocomplete="none"
                        autocorrect="off" spellcheck="false" name="query" v-model="whereInput">
                </div>
                <section>
                    <section v-for="(label, idx) in countryLabels" :key="label" @click.prevent = "setWhere(label)" :class="{'chosen-img': label === whereInput}">
                        <img v-if="label != `Im flexiable`" :src="getImgUrl(label)" alt="" />
                        <img v-else
                            src="https://res.cloudinary.com/nogacloud/image/upload/v1659290575/countries/world.jpg"
                            alt="" />
                        <p>{{ label }}</p>
                    </section>
                </section>
            </div>
        </div>
        <div class="when-filter" @click.prevent="filterWhen = true, filterWhere = false, filterWho = false"
            :style="[filterWhen ? {position:'fixed',width: 'calc(100vw - 24px)',padding: '0 !important','z-index':'10'} : '']">
            <button v-if="!filterWhen">
                <span>when</span>
                <span>{{dateFormat || 'Add dates'}}</span>
            </button>
            <div class="alt-div" v-else>
                <h2>When's your trip?</h2>
                <Datepicker v-model="date" :enableTimePicker="false" vertical :full-month-name="true" hideInputIcon
                    :minDate="new Date()" inline autoApply range />
                <span>
                    <button @click.prevent="clearDate" class="clear-btn">Clear</button>
                    <button @click.stop="filterWho = true, filterWhen = false, filterWhere = false">Next</button>
                </span>
            </div>
        </div>
        <div class="who-filter" @click.prevent="filterWho = true, filterWhen = false, filterWhere = false">
            <button v-if="!filterWho">
                <span>who</span>
                <span>{{guests.sum ||'Add guests'}} {{guestsAmount || ''}}</span>
            </button>
            <div class="alt-div" v-else>
                <h2>Who's coming?</h2>
                <guests-filter-modal @guest="updateGuests"/>
            </div>
        </div>
        <section class="filter-submit">
            <button @click.prevent="clear">Clear all</button>
            <div class="btn-container" @click.prevent="search">
                <div class="cell" v-for="currCell in 100" :key="currCell"></div>
                <div class="content">
                    <button class="action-btn">
                        <span class="word-btn"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true" role="presentation" focusable="false"
                                style="display: block; height: 16px; width: 16px; fill: currentcolor; margin-right: 10px;">
                                <path
                                    d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z"
                                    opacity=".8"></path>
                            </svg>Search</span>
                    </button>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import guestsFilterModal from './guests-filter-modal.vue'
    // props: {
    //     propName: propType
    // }
    export default {
    name:'mobile-filter',
    data() {
        return {
            filterWhere:true,
            filterWhen:false,
            filterWho:false,
            date:'',
            countryLabels: [`Im flexiable`, 'Greece', 'Brazil', 'United States', 'Spain', 'Canada'],
            whereInput:'',
            guests:{adults:0,children:0,infants: 0, pets: 0, sum:0},
            guestsAmount:''
        }
    },
    methods: {
        close(){
            this.$emit('close')
        },
        clearDate(){
            this.date = ''
        },
        clear(){
            this.clearDate()
            this.guests = {adults:0,children:0,infants: 0, pets: 0, sum:0}
            this.guestsAmount = ''
            this.whereInput = ''
        },
        getImgUrl(country) {
            country = country.replace(' ', '_')
            return new URL('https://res.cloudinary.com/nogacloud/image/upload/v1659292790/countries/' + country, import.meta.url).href
        },
        setWhere(country) {
            if (country !== 'Im flexiable') {
                this.whereInput = country
            } else {
                let countries = ['spain', 'portugal', 'United States', 'Istanbul', 'hong kong', 'Brazil', 'canada', 'Indonesia', 'greece']
                let country = countries[Math.floor(Math.random() * countries.length)]
                this.whereInput = country
            }
        },
        updateGuests(guests){
            this.guests = guests
            if(guests.sum===1) this.guestsAmount = 'guest'
            else  if(guests.sum>1) this.guestsAmount = 'guests'
            else this.guestsAmount = ''
        },
        search(){
            if(this.date){
                var emitStartDate = new Date(this.date[0]).toISOString().slice(0, 16).replace('T', ', ').replaceAll('-', '/')
                emitStartDate = emitStartDate.slice(0, 10)
                var emitEndDate = new Date(this.date[1]).toISOString().slice(0, 16).replace('T', ', ').replaceAll('-', '/')
                emitEndDate = emitEndDate.slice(0, 10)
            }
            else {
                var emitStartDate = ''
                var emitEndDate = ''
            }
            this.$emit('filter', this.whereInput, this.guests, {start:emitStartDate ,end:emitEndDate})
        }
    },
    computed:{
        dateFormat(){
            if(this.date==='') return false
            let start = new Date(this.date[0])
            let end = new Date(this.date[1])

            let startMon = new Intl.DateTimeFormat('en-US', { month: 'short'}).format(start)
            let endMon = new Intl.DateTimeFormat('en-US', { month: 'short'}).format(end)

            let startDay = start.getDate()
            let endDAy = end.getDate()

            if(startMon===endMon) return `${startMon} ${startDay}-${endDAy}`
            else return `${startMon} ${startDay}-${endMon} ${endDAy}`
        }
    },
    created(){
        document.body.style.overflow = 'hidden'
    },
    components:{
        guestsFilterModal
    },
    unmounted(){
        document.body.style.overflow = 'auto'
    }
    }
</script>