<template>
    <div>
        <home-header :city="city"></home-header>
        <home-slider :list="sliderList"></home-slider>
        <home-icons :list="iconList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
        <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
    import HomeHeader from './components/Header.vue'
    import HomeSlider from './components/Slider.vue'
    import HomeIcons from './components/Icons.vue'
    import HomeRecommend from './components/Recommend.vue'
    import HomeWeekend from './components/Weekend.vue'
    import axios from 'axios'

    export default {
        name: "Home",
        components: {
            HomeHeader,
            HomeSlider,
            HomeIcons,
            HomeRecommend,
            HomeWeekend
        },
        data: function () {
            return {
                city: "",
                sliderList: [],
                iconList: [],
                recommendList: [],
                weekendList: []
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
                            this.iconList = content.iconList;
                            this.recommendList = content.recommendList;
                            this.weekendList = content.weekendList;
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