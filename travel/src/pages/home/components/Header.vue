<template>
    <div class="header">
        <div class="left">
            <div class="iconfont back-icon">&#xe63b;</div>
        </div>
        <div class="input"><span class="iconfont search-icon">&#xe6a8;</span>请输入内容</div>
        <div class="right">{{city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
        props: {
            city: String
        }
    }
</script>

<style lang="stylus" scoped>
    /*@import "../../../assets/styles/varibles.styl"*/
    @import "~styles/varibles.styl"
    .header
        line-height: .86rem
        display: flex
        background $themColor
        color #ffffff
        .left
            width: .90rem
            float: left
            text-align center
            .back-icon
                font-size .46rem
        .input
            flex: 1
            background #ffffff
            height .62rem
            line-height .62rem
            border-radius .1rem
            margin-top .12rem
            color #cccccc
            text-align left
            .search-icon
                margin-right .1rem
                margin-left .1rem

        .right
            width: 1.24rem
            .arrow-icon
                font-size .24rem
                margin-left .1rem

</style>