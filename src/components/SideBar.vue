<template>
    <aside class="sideBar">
        <div id="showAllItems" class="items-option" @click="showAllItems">All</div>
        <div id="showActiveItems" class="items-option" @click="showActiveItems">Active</div>
        <div id="showCompletedItems" class="items-option" @click="showCompletedItems">Completed</div>
    </aside>
</template>

<script>
import { mapMutations } from 'vuex'
export default {

    methods:{

        ...mapMutations([
            'showAllItems',
            'showActiveItems',
            'showCompletedItems'
        ])
    }
}
</script>

<style>
.sideBar{
    background-color: firebrick;
    color: #fff;
}
.items-option{
    padding: 6px 10px;
    margin: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
}

.items-option:hover {
    background-color: #c7676787;
}
</style>