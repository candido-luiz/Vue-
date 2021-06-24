<template>
    <aside class="sideBar">
        <div class="items-option">All</div>
        <div class="items-option">Active</div>
        <div class="items-option">Completed</div>
    </aside>
</template>

<script>
export default {

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