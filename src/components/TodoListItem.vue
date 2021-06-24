<template>
    <div class="list-item">
        <div class="checkButton"></div>
        <div>{{item.text}}</div>
        <button>Delete</button>
    </div>
</template>

<script>
export default {
    props:{
        item: Object
    }
}
</script>

<style>
.list-item{
    display: flex;
    justify-content: space-between;
    max-width: 600px;
    width: 100%;
    padding: 5px;
    margin: 5px 0;
}
.checkButton{
    width: 12px;
    height: 12px;
    background-color: green;
}

.btn-delete{
    padding: 5px 6px;
}
</style>