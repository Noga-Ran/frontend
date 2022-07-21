<template>
    <form class="form-modal-container">
        <div class="search-opts">
            <button>
                <p>Stays</p>
            </button>
            <button>
                <p>Experiences</p>
            </button>
            <button>
                <p>Online Experiences</p>
            </button>
        </div>
        <div class="modal-filter-choices-layout">
            <div class="filter-modal-where-container">
                <p>Where</p>
                <input v-model="where" @input="emit" type="text" name="query" placeholder="Search destinations"
                    aria-describedby="bigsearch-query-location-description" aria-autocomplete="none" autocomplete="off"
                    autocorrect="off">
            </div>
            <div class="filter-seperator"></div>
            <div class="check-in-out-container">
                <div class="check-in-container" role="button">
                    <p>Check in</p>
                    <span>Add dates</span>
                    <Datepicker v-model="date" range multiCalendars />
                </div>
                <div class="filter-seperator"></div>
                <div class="check-out-container">
                    <p>Check out</p>
                    <span>Add dates</span>
                </div>
            </div>
            <div class="filter-seperator"></div>
            <div class="filter-who-container">
                <p>Who</p>
                <span>Add guests</span>
            </div>
            <div class="search-container">
                <button @click.prevent="setFilter">
                    <div class="modal-search">
                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                            role="presentation" focusable="false"
                            style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
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
    </form>
    <!-- <input v-model="where" @input="emit" type="text"> -->
</template>


<script>
// props: {
// propName: propType
// }
export default {
    data() {
        return {
            where: ''
        }
    },
    methods: {
        emit() {
            this.$emit('filter', this.where)
        },
        setFilter() {
            this.$emit('emit')
        }
    },
    computed: {},
    created() { },
}
</script>