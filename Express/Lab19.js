const express = require('express');
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello World from Express");
});

app.get("/kavyam",(req,res)=>{
    res.send("Hello World from Kavyam");
});

app.get("/joshi",(req,res)=>{
    res.send("Hello World from Joshi");
});

app.get("/Darshan",(req,res)=>{
    res.send("Hello World from Darshan");
});

app.get("/College",(req,res)=>{
    res.send("Hello World from College");
});


app.listen(3000,()=>{
    console.log("server Started at 3000");
});