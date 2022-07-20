
<template>
    <category-filter />
    <section class="demo-list-cont">
        <section class="demo-list">
            <stay-preview :key="dfg" v-for="x in 32"></stay-preview>
        </section>
    </section>
</template>
<script>
import categoryFilter from './category-filter.vue'
import stayPreview from './stay-preview.vue'
export default {
    components: {
        categoryFilter,
        stayPreview,
    },
}
</script>

