<template>
    <div>
        <div class="title">周末热销</div>
        <ul>
            <li class="item border-bottom" v-for="i in list" v-bind:key="i.id">
                <div class="item-image-wrapper">
                    <img class="item-image" :src="i.imgUrl"/>
                </div>
                <div class="item-content">
                    <p class="item-title">{{i.title}}</p>
                    <p class="item-desc">{{i.desc}}</p>
                </div>
            </li>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "Weekend",
        props: {
            list: Array,
        },
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    @import "~styles/mixins.styl"
    .title
        line-height .8rem
        height .8rem
        background #eee
        text-indent .2rem
        text-align left

    .item-image-wrapper
        overflow hidden
        height 0
        margin-top .15rem
        padding-bottom 33.9%
        .item-image
            width 100%

    .item-content
        padding .2rem
        p
            color $darkTextColor
            text-align left
        .item-title
            margin-bottom .2rem
            ellipsis()
        .item-desc
            color #cccccc


</style>