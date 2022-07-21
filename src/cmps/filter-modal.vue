<template>
    <form>
        <div>
            <button>
                <div>
                    <span>Stays</span>
                </div>
            </button>
            <button>
                <div>
                    <span>Experiences</span>
                </div>
            </button>
            <button>
                <div>
                    <span>Online Experiences</span>
                </div>
            </button>
        </div>
        <div class="modal-filter-choices-layout">
            <div class="modal-filter-choices-container">
                <div class="filter-modal-label-container">
                    <label class="filter-label">
                        <div>
                            <div>Where</div>
                            <input v-model="where" @input="emit" type="text" name="query" placeholder="Search destinations" aria-describedby="bigsearch-query-location-description" aria-autocomplete="none" autocomplete="off" autocorrect="off">
                        </div>
                    </label>
                </div>
            </div>
            <div class="filter-seperator">|</div>
            <div class="check-in-out-container">
                <div class="check-in-container" role="button">
                    <div>Check in</div>
                    <div>Add dates</div>
                </div>
                <div class="check-out-container" role="button"></div>                                 <div class="check-in-container"></div>                                                                                <div class="check-in-container">
                    <div>Check out</div>
                    <div>Add dates</div>
                </div>
            </div>
            <div class="filter-seperator">|</div>
            <div class="who-search-container">
                <div class="filter-who-container">
                    <div>Who</div>
                    <div>Add guests</div>
                </div>
                <div class="search-symboll-container">
                    <button @click.prevent="setFilter">
                        <span>
                            <span></span>
                        </span>
                        <span>
                            <div>
                                <div>
                                    <svg></svg>
                                </div>
                            </div>
                            <div>Search</div>
                        </span>
                    </button>
                </div>
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
            where:''
        }
    },
    methods: {
        emit(){
            this.$emit('filter',this.where)
        },
        setFilter(){
            this.$emit('emit')
        }
    },
    computed: {},
    created(){},
}
</script>