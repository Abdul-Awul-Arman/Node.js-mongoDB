//taking the events emitter from builtin node module.
const EventEmitter = require("events");

class MyEmitter extends EventEmitter { };

let schoolBall = new EventEmitter();

schoolBall.on("hit",()=> {
    console.log("this ring for students");
});

schoolBall.emit("hit");
  