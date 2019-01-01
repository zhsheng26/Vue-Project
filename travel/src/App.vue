<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="stylus" scoped>
    @import "~styles/varibles.styl"
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: $themColor;
    }
</style>
