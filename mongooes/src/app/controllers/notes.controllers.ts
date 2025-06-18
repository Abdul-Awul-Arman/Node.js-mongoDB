import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";

 const notesRouter=express.Router();

notesRouter.post("/create-note",async(req:Request,res:Response)=>{
     
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

 notesRouter.get("/",async(req:Request,res:Response)=>{
   
    const myNote=await Note.find();
     res.status(201).send(
         myNote
     )
 })

 notesRouter.get("/:noteId",async(req:Request,res:Response)=>{
 
    const myNote=await Note.findById(req.params.noteId);
    
     res.status(201).send(
         myNote
     )
 })
 
 notesRouter.patch("/update/:noteId",async(req:Request,res:Response)=>{
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

 notesRouter.delete("/delete/:noteId",async(req:Request,res:Response)=>{
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
 
 
 export default notesRouter;
 