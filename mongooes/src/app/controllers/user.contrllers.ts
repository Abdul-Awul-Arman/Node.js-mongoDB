import express, { Request, Response } from "express";
import { z } from "zod";
import { User } from '../models/user.model';

const userRouter=express.Router();

    const userZodSchema=z.object({
        firstName:z.string(),
        lastName:z.string(),
        email:z.string(),
        password:z.string(),
        role:z.string(),
        age:z.number(),
       
    })




userRouter.get("/",async(req:Request,res:Response)=>{
    const users= await User.find();
    res.status(200).send({

        success:true,
        message:"Users retrieved successfully",
        users:{
            users
        }
    }
    )
})

userRouter.post("/create-user",async(req:Request,res:Response)=>{
    
    let user;
    try{
        // const body=await userZodSchema.parseAsync(req.body);
        const body=req.body
    user= await User.create(body);
        
    }catch(error){
      res.send({
        success:false,
        message:error
      })
    }
    
    res.status(201).send({
        success:true,
        message:"User register successfully",
        userInfo:{
            user
        }
    })

});
userRouter.patch("/update/:userId",async(req:Request,res:Response)=>{
    const userId=req.params.userId;
    const body=req.body
    const user= await User.findByIdAndUpdate(userId,body,{new:true})
    
    res.status(200).send({
        success:true,
        message:"User updated successfully",
        userInfo:{
            user
        }
    })

});
userRouter.delete("/delete/:userId",async(req:Request,res:Response)=>{
    const userId=req.params.userId;
    const user= await User.findByIdAndDelete(userId)
    
    res.status(200).send({
        success:true,
        message:"User deleted successfully",
        userInfo:{
            user
        }
    })

});




export default userRouter;