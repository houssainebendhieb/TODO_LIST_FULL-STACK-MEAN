const express=require('express');

const route=express.Router();
const TodoList=require('../model/TodoList');


route.get('/',async(req,res)=>{

    try{
        const result=await TodoList.find();
        res.send(result);

    }catch(err)
    {
        res.status(400).json(err);
    }
})


route.post('/add',async(req,res)=>{

    try{

        const todo=new TodoList(req.body);
        const result=await  todo.save()
        res.status(200).json(result);
    }catch(err){
        res.status(400).json(err);
    }

})



route.delete('/delete:id',async(req,res)=>{

    try{
        console.log(req.params.id);
        const todo=await TodoList.findOneAndRemove({name:req.params.id});
        return todo;

    }catch(err){
        res.status(400).json(err);
    }

})
module.exports=route;