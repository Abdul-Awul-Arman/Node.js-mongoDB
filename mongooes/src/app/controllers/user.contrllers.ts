import express, { Request, Response } from "express";
import { User } from "../models/user.modle";

const userRouter=express.Router();

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
    const body=req.body;
    let user;
    try{
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