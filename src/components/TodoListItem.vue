<template>
    <div class="list-item">
        
        <div class="checkButton" 
            :class="{'checked': isCompleted, 'notChecked': !isCompleted}"
            @click="toggleChecked">
        </div>

        <div class="item-text"
        :class="{'completed-item': isCompleted}">
            {{item.text}}
        </div>

        <button @click="removeItem(item.id)">Delete</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    props:{
        item: Object
    },

    data(){
        return{
            isCompleted: false
        }
    },

    methods:{
        ...mapMutations([
            'removeItem',
            'addActiveItem',
            'addCompletedItem'
        ]),

        toggleChecked: function(){
            this.isCompleted = !this.isCompleted;
            
            if(this.isCompleted){
                this.addCompletedItem(this.item);
            }else{
                this.addActiveItem(this.item);
            }
        }
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
.completed-item{
    text-decoration: line-through;
    color: #ccc;
}
.checkButton{
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid;
}
.checked{
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