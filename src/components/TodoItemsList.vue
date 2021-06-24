<template>
    <div>
        <section class="addItems">
            <AddTodoItem />
        </section>

        <section class="todo-list">
            <TodoListItem v-for="item in items" 
                :key="item.id" 
                :item="item"  
            />
        </section>

        
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

<style scoped>

.todo-list{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>