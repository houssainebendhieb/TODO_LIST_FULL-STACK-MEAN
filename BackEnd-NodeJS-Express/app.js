const express=require('express');
const app=express();
require('./config/connexion');
const todolist=require('./routes/todolist');

const cors=require('cors');
app.use(cors());
app.use(express.json());
app.use('/',todolist);




app.listen(3000,()=>{
    console.log("backend work")
})