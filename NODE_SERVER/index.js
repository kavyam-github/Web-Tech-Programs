console.log("jeel_kavyam");

const { log } = require('console');
const path=require('path');
const normalizePath=path.normalize("D:/Sem-3/Web Tech Programs");
console.log("Normalize path: ",normalizePath); 

const extName=path.extname("D:/Sem-3/Web Tech Programs.txt");
console.log("Extension name: ",extName);

const baseName=path.basename("D:/Sem-3/Web Tech Programs");
console.log("Base name: ",baseName);

const dirName=path.dirname("D:/Sem-3/Web Tech Programs")
console.log("Directory name: ",dirName);

const joinPath=path.join("D:/Sem-3/Web Tech Programs","abc.txt");
console.log("Join path: ",joinPath);


//const { log } = require('console');
const fs=require('fs');
//  //fs.renameSync('demo.txt','user.txt');

// let data=fs.readFileSync('user.txt','utf-8');
// //console.log(data);

// //fs.appendFileSync('demo.txt','this is node js program');
// fs.writeFileSync('user.txt','this is vanilla js program');

// let data2=fs.readFileSync('user.txt','utf-8');
// console.log(data2);

// let data3=fs.readFileSync('user.txt','utf-8');
// console.log(data3);
