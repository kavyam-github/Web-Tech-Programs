const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const Bank=require('./Banking');

const connectionString="mongodb+srv://kavyamjoshi22:hvthz7HS2gtXnvnW@cluster0.oqry3.mongodb.net/Banking";


mongoose.connect(connectionString).then(()=>{
    console.log("Connected with cloud Database");
    const app=express();

    app.use(bodyParser.urlencoded());

    //Get All
    app.get('/Bank',async(req,res)=>{
        const ans=await Bank.find();
        res.send(ans);
    });


    //Get ID
    app.get('/Bank/:id',async(req,res)=>{
        const ans=await Bank.findOne({id:req.params.id});
        res.send(ans);
    });


    //create
    app.post('/Bank',async(req,res)=>{
        Bk=new Bank(req.body);
        const ans=await Bk.save();
        res.send(ans);
    });

    //UPdate
    app.patch('/Bank/:id',async(req,res)=>{
        const Bk=await Bank.findOneAndUpdate({id:req.params.id}, req.body,{new: true});
        res.send(Bk);
    });

    //Delete
    app.delete('/Bank/:id',async(req,res)=>{
        const ans = await Bank.deleteOne({id:req.params.id});
        res.send(ans);
    });

     app.listen(4500,()=>{
        console.log("Server Started @ 4500");
    });
    
});