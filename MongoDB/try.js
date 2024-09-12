const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://kavyamjoshi22:hvthz7HS2gtXnvnW@cluster0.oqry3.mongodb.net/",(err)=>{
    if(err){
        return console.log("err");
    }
        app.listen(3000,()=>{
            console.log("server started - 3000");
            
        });
});