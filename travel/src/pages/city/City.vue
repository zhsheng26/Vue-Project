<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list></city-list>
    </div>
</template>

<script>
    import CityHeader from './components/CityHeader.vue'
    import CitySearch from './components/CitySearch.vue'
    import CityList from "./components/CityList";

    export default {
        name: "City",
        components: {
            CityList,
            CitySearch,
            CityHeader
        }
    }
</script>

<style scoped>

</style>