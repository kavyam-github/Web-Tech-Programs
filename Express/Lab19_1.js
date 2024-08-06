const express = require('express');
const app=express();
const path=require('path');

app.get("/Home",(req,res)=>{
    res.sendFile(path.join(__dirname,'home.html'));
});


app.get("/About",(req,res)=>{
    res.sendFile(path.join(__dirname,'about.html'));
});


app.get("/Help",(req,res)=>{
    res.sendFile(path.join(__dirname,'help.html'));
});

app.get("/Contact",(req,res)=>{
    res.sendFile(path.join(__dirname,'Contact.html'));
});

app.get("/FAQs",(req,res)=>{
    res.sendFile(path.join(__dirname,'FAQs.html'));
});

app.get("/user/:name",(req,res)=>{
    const Name = req.params.name;
    res.send(`hello world from ${Name}`);
});

app.listen(3000,()=>{
    console.log("server started at 3000");
});


