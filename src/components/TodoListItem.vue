<template>
    <div class="list-item">
        <div class="checkButton"></div>
        <div class="item-text">{{item.text}}</div>
        <button @click="removeItem(item.id)">Delete</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    props:{
        item: Object
    },

    methods:{
        ...mapMutations([
            'removeItem'
        ])
    }
}
</script>

<style>
.list-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    width: 100%;
    padding: 5px;
    margin: 5px 0;
    background-color: #fff;
    box-shadow: 1px 1px 3px #3a3939;
}
.checkButton{
    width: 12px;
    height: 12px;
    background-color: green;
}
.item-text{
    flex: 1;
    margin-left: 15px;
}
.btn-delete{
    padding: 5px 6px;
}
</style>