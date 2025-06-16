import express, { Application, Request, Response } from 'express'
import { model, Schema } from 'mongoose';
const app:Application=express();
 const NoteSchema=new Schema({
    title:String,
    content:String
 });
 
  const Note=model("Note",NoteSchema);


app.post("/create-note",async(req:Request,res:Response)=>{
    const myNote=new Note({
        title:"Learning mongoose",
        content:"I am learning mongoose"
    });

  const result= await myNote.save()

    res.status(201).send(
        {
            success:true,
            message:"Note created successfully",
            note:myNote 
            
        }
    )
})

app.get("/",(req:Request,res:Response)=>{

    res.send("this app")

})

export default app;