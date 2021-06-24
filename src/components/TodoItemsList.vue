<template>
    <div>
        <div class="addItems">
            <AddTodoItem />
        </div>
    </div>
</template>

<script>
import AddTodoItem from './AddTodoItem.vue';

export default {
    components:{
        AddTodoItem
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