<template>
    <div>
        <home-header :city="city"></home-header>
        <home-slider :list="sliderList"></home-slider>
        <home-icons :list="iconList"></home-icons>
    </div>
</template>

<script>
    import HomeHeader from './components/Header.vue'
    import HomeSlider from './components/Slider.vue'
    import HomeIcons from './components/Icons.vue'
    import axios from 'axios'

    export default {
        name: "Home",
        components: {
            HomeHeader,
            HomeSlider,
            HomeIcons,
        },
        data: function () {
            return {
                city: "",
                sliderList: [],
                iconList: []
            }
        },
        methods: {
            reqData: function () {
                axios.get("/api/index.json")
                    .then(resp => {
                        let data = resp.data;
                        if (data.ret) {
                            let content = data.content;
                            this.city = content.city;
                            this.sliderList = content.swiperList;
                            this.iconList = content.iconList
                        }
                    })
                    .catch(function (error) {
                        /* eslint-disable no-console */
                        console.log(error);
                    })


            }
        },
        mounted() {
            this.reqData()
        }
    }
</script>

<style scoped>

</style>