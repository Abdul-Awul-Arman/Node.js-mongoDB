const path=require("path");
const fs=require("fs");


const inputArguments=process.argv.slice(2);

let text=inputArguments.join(" ");
let timeStamp=new Date().toISOString()
console.log(text);
let massage=`${text} ${timeStamp}\n`

if(!massage){
    console.log("❌ Please provide massage to log");
    console.log("Example : node index.js Hello world");
    process.exit(1);
}

const filePath=path.join(__dirname,"log.txt")

fs.appendFile(filePath,massage,{encoding:"utf-8"},()=>{
    console.log("Your log added successfully");
})

console.log(filePath);  