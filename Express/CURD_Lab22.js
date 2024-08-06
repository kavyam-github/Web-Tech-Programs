const express =require('express');
const app=express();

const students=['Kavyam','Joshi','Rajkot','Gujarat','INDIA'];

app.get('/students',(req,res)=>{
    res.send(students);
});

app.get('/students/:names',(req,res)=>{
    res.send(students[req.params.names]);
});

app.post('/students/:names',(req,res)=>{
    students.push(req.params.names);
    res.send(students);
});

app.delete('/students/:names',(req,res)=>{
    students.splice(req.params.index,1);
    res.send(students);
});

app.patch('/students/:index/:newname',(req,res)=>{
    students[req.params.index]=req.params.newname;
    console.log(req.params);
    res.send(students);
})

app.listen(5000,()=>{
    console.log("server started at 5000");
});