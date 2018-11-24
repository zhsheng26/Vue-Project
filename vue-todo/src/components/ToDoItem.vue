<template>
    <li @click="clickItem">{{content}}</li>
</template>

<script>
    export default {
        name: "ToDoItem",
        props: {
            index: Number,
            content: String
        },
        methods: {
            clickItem: function () {
                this.$emit('clickToDo', this.index)
            }
        }
    }
</script>

<style scoped>

</style>