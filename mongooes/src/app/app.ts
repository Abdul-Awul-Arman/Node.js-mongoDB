import express, { Application, Request, Response } from 'express'
import { model, Schema } from 'mongoose';
import { version } from 'os';
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
 },
 {
    versionKey:false,
    timestamps:true
 }
);
 
  const Note=model("Note",NoteSchema);


app.post("/notes/create-note",async(req:Request,res:Response)=>{
     
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
app.get("/notes",async(req:Request,res:Response)=>{
  
   const myNote=await Note.find();
    res.status(201).send(
        myNote
    )
})
app.get("/notes/:noteId",async(req:Request,res:Response)=>{

   const myNote=await Note.findById(req.params.noteId);
   
    res.status(201).send(
        myNote
    )
})

app.patch("/notes/update/:noteId",async(req:Request,res:Response)=>{
    const noteId=req.params.noteId;
    const updatedBody=req.body;
//    const myNote=await Note.findByIdAndUpdate(noteId,updatedBody,{new:true})
//    const myNote=await Note.updateOne({_id:noteId},updatedBody,{new:true})
   const myNote=await Note.findOneAndUpdate({_id:noteId},updatedBody,{new:true})

    res.status(201).send(
        {
           success:true,
           message:"Note updated successfully", 
            myNote

        }
    )
})
app.delete("/notes/delete/:noteId",async(req:Request,res:Response)=>{
    const noteId=req.params.noteId;
    const updatedBody=req.body;
   const myNote=await Note.findByIdAndDelete(noteId,updatedBody)
//    const myNote=await Note.deleteOne({_id:noteId},updatedBody)
//    const myNote=await Note.findOneAndDelete({_id:noteId},updatedBody)

    res.status(201).send(
        {
           success:true,
           message:"Note delete successfully", 
            myNote

        }
    )
})

app.get("/",(req:Request,res:Response)=>{

    res.send("this app")

})

export default app;