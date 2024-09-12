const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const Food=require('./Fooding');

const connectionString="mongodb+srv://kavyamjoshi22:hvthz7HS2gtXnvnW@cluster0.oqry3.mongodb.net/Food";


mongoose.connect(connectionString).then(()=>{
    console.log("Connected with cloud Database");
    const app=express();

    app.use(bodyParser.urlencoded());

    //Get All
    app.get('/Food',async(req,res)=>{
        const ans=await Food.find();
        res.send(ans);
    });


    //Get ID
    app.get('/Food/:id',async(req,res)=>{
        const ans=await Food.findOne({id:req.params.id});
        res.send(ans);
    });


    //create
    app.post('/Food',async(req,res)=>{
        Fd=new Food(req.body);
        const ans=await Fd.save();
        res.send(ans);
    });

    //UPdate
    app.patch('/Food/:id',async(req,res)=>{
        const Fd=await Food.findOneAndUpdate({id:req.params.id}, req.body,{new: true});
        res.send(Fd);
    });

    //Delete
    app.delete('/Food/:id',async(req,res)=>{
        const ans = await Food.deleteOne({id:req.params.id});
        res.send(ans);
    });

     app.listen(5500,()=>{
        console.log("Server Started @ 5500");
    });
    
});