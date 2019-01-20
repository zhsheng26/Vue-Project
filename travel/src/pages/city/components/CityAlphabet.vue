<template>
    <ul class="list">
        <li class="item" v-for="item in letters" :key="item">{{item}}</li>
    </ul>
</template>

<script>
    export default {
        name: "CityAlphabet",
        props: {
            cities: Object
        },
        computed: {
            letters: function () {
                const letters = [];
                for (let i in this.cities) {
                    letters.push(i)
                }
                return letters
            }
        },
    }
</script>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"

    .list
        position absolute
        right 0
        top 1.58rem
        bottom 0
        display flex
        flex-direction column
        justify-content center
        width .5rem
        .item
            text-align center
            height .5rem
            line-height .5rem
            color $themColor


</style>