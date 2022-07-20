<template>
    <div class="header-filter-layout">
        <div class="header-filter-container">
            <div v-if="!isSearch" class="header-txt-container" @click.prevent="isSearch=true">Anywhere</div>
            <div v-if="!isSearch" class="header-txt-container">Any week</div>
            <div  v-if="!isSearch" class="header-txt-container">Add guests</div>
            <div v-else>
                <input v-model="where" type="text">
            </div>
            <div class="header-demo-search" @click.prevent="setFilter">

                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation"
                    focusable="false"
                    style="display: block; fill: none; height: 12px; width: 12px; stroke: currentcolor; stroke-width: 5.33333; overflow: visible;">
                    <g fill="none">
                        <path
                            d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9">
                        </path>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            where: '',
            isSearch: false
        }
    },
    methods: {
        setFilter(){
            if(this.where) {
                let filterWhere = this.where
                this.isSearch = false
                this.where = ''

                this.$emit('filter',filterWhere)
            }
        }
    },
    computed: {

    },
    created() {

    }
}
</script>