<template>
    <input v-model="where" @input="emit" type="text">
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
        }
    },
    computed: {},
    created(){},
}
</script>