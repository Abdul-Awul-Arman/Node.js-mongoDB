import express, { Application, Request, Response } from 'express'
import { model, Schema } from 'mongoose';
const app:Application=express();

 app.use(express.json())

 const NoteSchema=new Schema({
    title:{type:String,require,trim:true},
    content:{type:String,default:"No content available"},
    category:{
        type:String,
        enum:["personal","study","other"],
        default:"personal",
    },
    pinned:{
        type:Boolean,
        default:false

    },

    tags:{
        label:{
          type:String, require:true
        },
        color:{
            type:String,
            default:"gray", 
            require:true
        }
    }
 });
 
  const Note=model("Note",NoteSchema);


app.post("/note/create-note",async(req:Request,res:Response)=>{
     
   const body=req.body
  
   const myNote=await Note.create(body);
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