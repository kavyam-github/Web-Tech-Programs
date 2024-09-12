const express=require("express");
const app=express();
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://kavyamjoshi22:hvthz7HS2gtXnvnW@cluster0.oqry3.mongodb.net/",

).then(()=>{
    console.log("MongoDB is connected");
    
}).catch((err)=>{
    console.log("Error",err);
        
});
app.listen(3000,()=>{
    console.log("Server started at 3000");
    
});

    
