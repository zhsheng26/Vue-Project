<template>
    <div>
        <div class="title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for="r in list" v-bind:key="r.id">
                <img class="item-image" :src="r.imgUrl"/>
                <div class="item-content">
                    <p class="item-title">{{r.title}}{{r.title}}{{r.title}}{{r.title}}</p>
                    <p class="item-desc">{{r.desc}},{{r.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Recommend",
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

    .item
        height 1.9rem
        display flex
        overflow hidden
        justify-content center;
        align-items center;
        .item-image
            padding .1rem
            height 1.7rem
            width 1.7rem
        .item-content
            padding .1rem
            flex 1
            min-width 0
            p
                color $darkTextColor
                text-align left
            .item-title
                margin-bottom .3rem
                ellipsis()
            .item-desc
                color #cccccc

</style>