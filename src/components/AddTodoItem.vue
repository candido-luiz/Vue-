<template>
    <div class="create-todoItem">
        <input v-model="inputText" type="text" name="createItemInput" id="createItemInput" placeholder="Add To-Do item">
        <button class="btn-addItem" @click="addItem">Add</button>
    </div>
</template>

<script>
import Item from '../Item';

export default {
    
    data(){
        return{
            inputText: ''
        }
    },

    methods:{
        //adiciona novo item na store.items
        addItem: function(){
            if(this.inputText.trim()){

                let item = new Item(this.inputText);
                this.$store.commit('addItem', {item});

                this.inputText = '';
            }
        }
    }
}
</script>

<style>
.create-todoItem{
    display: flex;
    justify-content: center;
    margin-top: 15px;
}
#createItemInput{
    max-width: 400px;
    width: 100%;
    padding: 5px 4px;
    font-size: 15px;
}
.btn-addItem{
    padding: 5px 6px;
    margin-left: 4px;
    border: none;
    background-color: #3f6668;
    color: #fff;
    font-weight: bold;
}
</style>