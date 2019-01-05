<template>
    <div class="icons">
        <div class="icon">
            <div class="icon-img-container">
                <img class="icon-img-content" src="">
            </div>
            <p class="icon-desc">热门景点</p>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Icons",
        props: {
            list: Array,
        }
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
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
                background #1abc9c
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

</style>