const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');

const Student=require('./Student');

const connectionString="mongodb+srv://kavyamjoshi22:hvthz7HS2gtXnvnW@cluster0.oqry3.mongodb.net/Student"

mongoose.connect(connectionString).then(()=>{
    console.log("Connected with Database");
    const app=express();

    app.use(bodyParser.urlencoded());


     //get All
     app.get('/students',async (req,res)=>{
        const ans = await Student.find();
        res.send(ans);
    });


    //getby ID
    app.get('/students/:id',async (req,res)=>{
        const ans = await Student.findOne({
            rollNo:req.params.id
        });
        res.send(ans);
    });


    //create 
    app.post('/students',async (req,res)=>{
        stu = new Student({...req.body});
        const ans = await stu.save();
        res.send(ans);
    });


    //delete
    app.delete('/students/:id',async (req,res)=>{
        const ans = await Student.deleteOne({
            rollNo:req.params.id
        });
        res.send(ans);
    });


    //update
    app.patch('/students/:id',async (req,res)=>{
        stu = await Student.findOne({rollNo:req.params.id});

        stu.name = req.body.name;
        
        const ans = await stu.save();
        res.send(ans);
    });


    //search
    app.get('/students/search/:text',async (req,res)=>{
        const ans = await Student.find({name:{$regex:req.params.text}});

        res.send(ans);
    });



    app.listen(3000,()=>{
        console.log("Server strated @ 3000");
    });
});