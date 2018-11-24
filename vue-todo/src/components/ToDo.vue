<template>
    <div class="todo">
        <h1>{{ msg }}</h1>
        <label>待办项：<input type="text" v-model="inputValue"></label>
        <button v-on:click="clickSubmit">提交</button>
        <ul>
            <to-do-item v-for="(item, index) in items"
                        v-bind:key="item.index"
                        :index="index"
                        @clickToDo="clickTodoItem"
                        v-bind:content="item.msg">
            </to-do-item>
        </ul>
    </div>
</template>

<script>
    import ToDoItem from "./ToDoItem";

    export default {
        name: 'ToDo',
        components: {ToDoItem},
        props: {
            msg: String
        },
        data() {
            return {
                inputValue: "",
                items: [
                    {msg: "andy"},
                    {msg: "tom"}
                ]
            }
        },
        methods: {
            clickSubmit: function () {
                this.items.push({msg: this.inputValue});
                this.inputValue = ""
            },
            clickTodoItem: function (index) {
                this.items.splice(index, 1);
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .todo {
        background: #edffed;
    }

    h1 {
        font-size: 10px;
    }

    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
