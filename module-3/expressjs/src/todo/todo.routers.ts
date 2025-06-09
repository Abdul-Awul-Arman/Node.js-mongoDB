import express,{Request,Response} from "express"
import fs from "fs"
import path from "path";
import { json } from 'stream/consumers';

const todosRouter=express.Router();


const filePath:string=path.join(__dirname,"../../DB/todos.json")


todosRouter.get('/',(req:Request,res:Response)=>{
  const data:string=fs.readFileSync(filePath,{encoding:"utf-8"})
  console.log(req.query)
  res.json(data)
  console.log(data);

});

todosRouter.post("/create-todo",(req:Request,res:Response)=>{
    const todo=req.body;
    console.log(todo);
  })

todosRouter.get("/:title",(req:Request,res:Response)=>{
    const todo=req.params;
    res.json(todo)
  })

todosRouter.put("/update-todo:title",(req:Request,res:Response)=>{
    const todo=req.params;
    res.json(todo)
  })

todosRouter.delete("delete-todo /:title",(req:Request,res:Response)=>{
    const todo=req.params;
    res.json(todo)
  })

export default todosRouter;