
const ChildProcess=require("child_process");
ChildProcess.exec("dir",(data,stdout)=>{
    console.log(stdout);
});

ChildProcess.exec("Start chrome https://www.youtube.com")

