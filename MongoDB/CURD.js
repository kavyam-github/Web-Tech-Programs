const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const student=require('./Student');

const connectionString="mongodb+srv://kavyamjoshi22:hvthz7HS2gtXnvnW@cluster0.oqry3.mongodb.net/Student";

mongoose.connect(connectionString).then(()=>{
    console.log('connected with cloud database');
    const app=express();

    //get all
    app.get('/Students',async(req,res)=>{
        const ans=await student.find();
        res.send(ans);
    });

    //get all id
    app.get('/Students/:id',async(req,res)=>{
    const ans=await student.findOne({id:req.params.id});
    res.send(ans);
    });

    //create
    app.post('/Students',async(req,res)=>{
        stu=new student({...req.body});
        const ans=await stu.save();
        res.send(ans);
    });

    //update
    app.patch('/Students/:id',async(req,res)=>{
        const stu=await student.findoneAndUpdate({id: req.params.id}, req.body,{new: true});
        res.send(stu);
    });

    //delete
    app.delete('/Students/:id',async(req,res)=>{
        const ans=await student.deleteOne({
            id:req.params.id},req.body);
            res.send(ans);
    });

    
    app.listen(4500,()=>{
    console.log("server started at 4500");
    });
});