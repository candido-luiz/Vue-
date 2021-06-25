<template>
    <div>
        <section class="addItems">
            <AddTodoItem />
        </section>

        <section v-if="showActiveItems" class="todo-list">
            <TodoListItem v-for="item in getActiveItems" 
                :key="item.id" 
                :item="item"  
            />
        </section>

        <section v-else-if="showCompletedItems" class="todo-list">
            <TodoListItem v-for="item in getCompletedItems" 
                :key="item.id" 
                :item="item"  
            />
        </section>

        <section v-else class="todo-list">
            <TodoListItem v-for="item in items" 
                :key="item.id" 
                :item="item"  
            />
        </section>

        
    </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import AddTodoItem from './AddTodoItem.vue';
import TodoListItem from './TodoListItem.vue';

export default {
    components:{
        AddTodoItem,
        TodoListItem
    },

    computed: {
        ...mapState([
            'items',
            'showActiveItems',
            'showCompletedItems'
        ]),

        ...mapGetters([
            'getActiveItems',
            'getCompletedItems'
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