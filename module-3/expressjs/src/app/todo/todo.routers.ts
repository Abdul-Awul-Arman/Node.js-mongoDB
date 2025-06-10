import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import client from "../../config/mongodb";

const todosRouter=express.Router();

todosRouter.use(express.json());



todosRouter.get('/',async(req:Request,res:Response)=>{
  
 
  const db=await client.db("todosDB");
  const collection=await db.collection("todos");

  const todos = await collection.find({}).toArray(); // FIXED HERE
  res.json(todos);

});

todosRouter.post("/create-todo",async(req:Request,res:Response)=>{

  let{title,description,priority,isCompleted}=req.body;

  const db=await client.db("todosDB");
  const collection=await db.collection("todos");

  collection.insertOne({
    title,description,priority,isCompleted
  })

  const todos = await collection.find({}).toArray(); // FIXED HERE
  res.json(todos);
  
    
  })

todosRouter.get("/:id",async(req:Request,res:Response)=>{
    const id=req.params.id;
   
    const db=await client.db("todosDB");
    const collection=await db.collection("todos");
    
    const todo=await collection.findOne({_id:new ObjectId(id)})
    res.json(todo)
    console.log(todo)
  })

todosRouter.put("/update-todo/:id",async(req:Request,res:Response)=>{
  let{title,description,priority,isCompleted}=req.body;
  const id=req.params.id;
   
  const db=await client.db("todosDB");
  const collection=await db.collection("todos");
  let filter={_id:new ObjectId(id)}
  
  const updatedTodo= await collection.updateOne(filter,{$set:{title,description,priority,isCompleted}},{upsert:true})

    res.json(updatedTodo)
  })

todosRouter.delete("/delete-todo/:id",async(req:Request,res:Response)=>{
  const id=req.params.id;
   
  const db=await client.db("todosDB");
  const collection=await db.collection("todos");
  
  const todo=await collection.deleteOne({_id:new ObjectId(id)})
  res.json(todo)
  })

export default todosRouter;