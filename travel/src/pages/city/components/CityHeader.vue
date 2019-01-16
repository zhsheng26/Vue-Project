<template>
    <div class="city-header">
        <router-link to="/">
            <div class="city-back">
                <div class="iconfont back-icon">&#xe63b;</div>
            </div>
        </router-link>
        城市选择
    </div>
</template>

<script>
    export default {
        name: "CityHeader"
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    .city-header
        overflow hidden
        line-height .86rem
        height .86rem
        font-size .32rem
        color #ffffff
        background $themColor
        position relative
        .city-back
            text-align center
            width: .90rem
            position absolute
            left 0
            top 0
            .back-icon
                font-size .46rem
                color #ffffff
</style>