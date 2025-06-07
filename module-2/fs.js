const fs = require("fs");

const text = "Learning node.js";

fs.writeFileSync("./hello.txt", text)

const data = fs.readFileSync("./hello.txt", { encoding: "utf8" });

console.log(data)   