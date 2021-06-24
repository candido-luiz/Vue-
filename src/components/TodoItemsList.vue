<template>
    <div>
        <section class="todo-items">
            <AddTodoItem />
        </section>
        
    </div>
</template>

<script>
import AddTodoItem from './AddTodoIdem.vue';

export default {
    components:{
        AddTodoItem
    }
}
</script>

<style>
.todo-items{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>