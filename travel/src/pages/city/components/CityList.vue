<template>
    <div class="list" ref="wrapper">
        <div>
            <div>
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">
                            北京
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="city in hot" v-bind:key="city.id">
                        <div class="button">
                            {{city.name}}
                        </div>
                    </div>
                </div>
            </div>

            <div v-for="(group,key) in cities" v-bind:key="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="item in group" v-bind:key="item.id">{{item.name}}</div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'

    export default {
        name: "CityList",
        props: {
            cities: Object,
            hot: Array,
        },
        mounted: function () {
            this.bscroll = new Bscroll(this.$refs.wrapper)
        }

    }
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc

    .border-bottom
        &:before
            border-color: #ccc

    .list
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        overflow: hidden;
        .title
            line-height: .54rem
            height .54rem
            background: #eee
            padding-left: .2rem
            color: #666
            font-size: .24rem
            text-align left

        .button-list
            overflow: hidden
            padding: .1rem .6rem .1rem .1rem
            .button-wrapper
                float: left
                width: 33.33%
                .button
                    margin: .1rem
                    padding: .1rem 0
                    text-align: center
                    border: .02rem solid #ccc
                    border-radius: .06rem
                    font-size .24rem
                    color #333333

        .item-list
            .item
                line-height: .76rem
                padding-left: .2rem
                text-align left
                color #333333

</style>