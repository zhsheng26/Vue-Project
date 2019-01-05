<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-show="showSwiper">
            <!-- slides -->
            <swiper-slide v-for="item of list" v-bind:key="item.id">
                <img class="swiper-img" :src="item.imgUrl">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>

</template>

<script>
    import 'swiper/dist/css/swiper.css'

    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "Swiper",
        props: {
            list: Array
        },
        data: function () {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    },
                    loop: true, // 循环模式选项
                    spaceBetween: 30,
                    centeredSlides: true,
                    autoplay: {
                        delay: 2500,
                        disableOnInteraction: false
                    }
                }
            }
        },

        computed: {
            showSwiper: function () {
                return this.list.length
            }
        },
        components: {
            swiper,
            swiperSlide
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"

    .wrapper >>> .swiper-pagination-bullet
        background: #ffffff

    .wrapper >>> .swiper-pagination-bullet-active
        background: $themColor

    .wrapper
        overflow hidden
        width 100%
        height 32vm
        /*height 0*/
        /*padding-bottom 32%*/
        .swiper-img
            width 100%


</style>