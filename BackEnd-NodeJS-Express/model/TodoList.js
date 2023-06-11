const mongoose=require('mongoose');


const TodoList=mongoose.model('todolist',{

    name:{type:String,require:true}
})


module.exports=TodoList;