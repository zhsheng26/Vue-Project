<template>
    <div class="header">
        <div class="left">返回</div>
        <div class="input">请输入内容</div>
        <div class="right">城市</div>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader"
    }
</script>

<style lang="stylus" scoped>
    .header
        line-height: .86rem
        display: flex
        background #00bcd4
        color #ffffff
        .left
            width: .98rem
            float: left
            text-align center
        .input
            flex: 1
            background #ffffff
            height .62rem
            line-height .62rem
            border-radius .1rem
            margin-top .12rem
            color #cccccc
            text-align left
            padding-left .2rem
        .right
            width: 1.24rem

</style>