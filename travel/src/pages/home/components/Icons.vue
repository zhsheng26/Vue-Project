<template>
    <div class="icons">
        <swiper>
            <swiper-slide v-for="(page,index) of pages" v-bind:key="index">
                <div class="icon" v-for="item in page" v-bind:key="item.id">
                    <div class="icon-img-container">
                        <img class="icon-img-content" :src="item.imgUrl">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>

</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper, swiperSlide} from 'vue-awesome-swiper'

    export default {
        name: "Icons",
        props: {
            list: Array,
        },
        computed: {
            pages() {
                const pages = [];
                this.list.forEach((item, index) => {
                    const page = Math.floor(index / 8)
                    if (!pages[page]) {
                        pages[page] = []
                    }
                    pages[page].push(item)

                });
                return pages;
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
    @import "~styles/mixins.styl"
    .icons
        overflow hidden
        height 0
        padding-bottom 50%
        .icon
            position relative
            overflow hidden
            float left
            height 0
            width 25%
            padding-bottom 25%
            .icon-img-container
                position absolute
                top 0
                left 0
                right 0
                bottom .44rem
                box-sizing border-box
                padding .1rem
                .icon-img-content
                    height 100%
                    display block
                    margin 0 auto
            .icon-desc
                position absolute
                left 0
                right 0
                bottom 0
                height .44rem
                line-height .44rem
                color $darkTextColor
                text-align center
                ellipsis()

</style>