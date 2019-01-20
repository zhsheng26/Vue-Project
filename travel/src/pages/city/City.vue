<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :cities="cities" :hot="hotCities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
    import CityHeader from './components/CityHeader.vue'
    import CitySearch from './components/CitySearch.vue'
    import CityList from "./components/CityList";
    import CityAlphabet from "./components/CityAlphabet";
    import axios from 'axios'

    export default {
        name: "City",
        components: {
            CityAlphabet,
            CityList,
            CitySearch,
            CityHeader
        },
        data: function () {
            return {
                hotCities: [],
                cities: {}
            }
        },
        mounted: function () {
            axios.get("api/city.json")
                .then(resp => {
                    let content = resp.data;
                    if (content.ret && content.data) {
                        let data = content.data;
                        this.hotCities = data.hotCities;
                        this.cities = data.cities;
                    }

                })

        }
    }
</script>

<style scoped>

</style>