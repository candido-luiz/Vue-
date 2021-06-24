<template>
    <div>
        <div class="addItems">
            <AddTodoItem />
        </div>
        <div v-for="item in items"
        :key="item.id">
            <TodoListItem :item="item"/>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import AddTodoItem from './AddTodoItem.vue';
import TodoListItem from './TodoListItem.vue';

export default {
    components:{
        AddTodoItem,
        TodoListItem
    },

    computed: {
        ...mapState([
            'items'
        ])
    }
}
</script>

<style>
/* .todo-items{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
} */
</style>