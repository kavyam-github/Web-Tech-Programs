const fs = require('fs');
const http = require('http');
const url=require('url');
const  data2 = fs.readFileSync('./home.html');
const  data1 = fs.readFileSync('./contact.html');
const data3 = fs.readFileSync('./about.html');

const demoserver = http.createServer((req,res)=>{
    if(req.url=="/home")
    {
        res.setHeader('Content-Type','text/html');
        
        res.end(data2);
      //  res.redirect('home.html');
    }
   
    // else{
    //     res.end('404');
    // }

    else if( req.url=='/contact')
    {
        res.setHeader('Content-Type','text/html');
        res.end(data1);
       // res.redirect('contact.html');
        
    }

    else if(req.url=='/about')
    {
        res.setHeader('Content-Type','text/html');
        res.end(data3);
      //  res.redirect('about.html');
    }

    else
    {
        res.write('Hello World');
        res.end();
    }

       
});

demoserver.listen(5001,()=>{
    console.log("server started at 5001");
});