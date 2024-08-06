const express=require('express');
const path=require('path');
const app=express();

const middlewareFunction=(req,res,next)=>{
    console.log("middleware function called...");
    next();
};

const moneyFunction=(req,res,next)=>{
    console.log("money function called...");
    next();
};

app.use(express.static(path.join(__dirname,'Image')));

app.get("/",middlewareFunction,moneyFunction,(req,res)=>{
    console.log("actual function called...");
    res.send("<h1>This is example of middleware function <br>/home will leads you to img</br></h1>");
});



app.get("/home",middlewareFunction,moneyFunction,(req,res)=>{
    console.log("img got");
    res.sendFile(path.join(__dirname,'img.html'));
});



app.listen(3000,()=>{
console.log("server started at 3000");
});