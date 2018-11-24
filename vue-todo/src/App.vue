<template>
    <div id="app">
        <img alt="Vue logo" src="./assets/logo.png" style="width: 20px; height:20px; display: inline-block">
        <ToDo msg="记录待办项"/>
    </div>
</template>

<script>
    import ToDo from './components/ToDo.vue'

    export default {
        name: 'app',
        components: {
            ToDo
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
