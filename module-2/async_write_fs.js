const fs=require("fs");

const text="I am learning filesystem";

fs.writeFile("./hello.txt",text,"utf8",(error)=>{
    if(error){
        console.log("This is error",error);
    };
    console.log("File written successfully");
});