const fs=require("fs");
console.log("task one")
//the callback written in error back formate
const data =fs.readFile("./hello.txt",{encoding:"utf-8"},(err,data)=>{
    if(err){
        console.log("Error Reading File",err);
        return;
    }
    console.log(data)
})

console.log(data);

console.log("task two");


