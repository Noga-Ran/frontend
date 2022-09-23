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
                <span>place</span>
            </button>
            <div class="alt-div" v-else>
                <h2>Where to?</h2>
            </div>
        </div>
        <div class="when-filter" @click.prevent="filterWhen = true, filterWhere = false, filterWho = false" :style="[filterWhen ? {position:'fixed'} : '']">
            <button v-if="!filterWhen">
                <span>when</span>
                <span>date</span>
            </button>
            <div class="alt-div" v-else>
                <h2>When's your trip?</h2>
                <!-- <Datepicker :full-month-name="true" @click="showWho = false" v-if="!show" @blur="setDate('start')"
                        hideInputIcon :autoPosition="false" :enableTimePicker="false" v-model="startDate" range
                        placeholder="Add dates" :minDate="new Date()" textInput inline autoApply
                        closeOnScroll /> -->
                <el-calender></el-calender>
                <Datepicker v-model="date" :enableTimePicker="false" vertical :full-month-name="true" hideInputIcon :minDate="new Date()" inline autoApply range/>
            </div>
        </div>
        <div class="who-filter" @click.prevent="filterWho = true, filterWhen = false, filterWhere = false">
            <button v-if="!filterWho">
                <span>who</span>
                <span>people</span>
            </button>
            <div class="alt-div" v-else>
                <h2>Who's coming?</h2>
                <guests-filter-modal/>
            </div>
        </div>
        <section class="filter-submit">
            <button>Clear all</button>
            <div class="btn-container" @click.prevent="guestLogin">
                <div class="cell" v-for="currCell in 100" :key="currCell"></div>
                <div class="content">
                    <button class="action-btn">
                        <span class="word-btn"><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style="display: block; height: 16px; width: 16px; fill: currentcolor; margin-right: 10px;"><path d="M13 0c7.18 0 13 5.82 13 13 0 2.868-.929 5.519-2.502 7.669l7.916 7.917-2.828 2.828-7.917-7.916A12.942 12.942 0 0 1 13 26C5.82 26 0 20.18 0 13S5.82 0 13 0zm0 4a9 9 0 1 0 0 18 9 9 0 0 0 0-18z" opacity=".8"></path></svg>Search</span>
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
                filterWhere:false,
                filterWhen:false,
                filterWho:false,
            }
        },
    methods: {
        close(){
            this.$emit('close')
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