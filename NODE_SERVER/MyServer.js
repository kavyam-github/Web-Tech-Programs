const http=require('http');
const server=http.createServer((req,res)=>{
    res.end("This is my first message in my first server");
});
server.listen(3000,()=>{
    console.log("server started at 3000");
}
);