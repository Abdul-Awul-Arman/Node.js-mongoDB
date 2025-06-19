import { model, Schema } from "mongoose";
import Iuser from "../interfaces/user.interface";

const userSchema=new Schema<Iuser>(
    {
        firstName:{type:String,required:true,trim:true},
        lastName:{type:String,required:true,trim:true},
        email:{type:String,required:true,trim:true,lowercase:true},
        password:{type:String,required:true,trim:true},
        role:{type:String,enum:["user","admin"],default:"user"},
        age:{type:Number,required:[true,"Age is must please fill up the field "],min:[18,"AGE MUST BE EQUAL OR GRATER"],max:60}
    },
    {
        timestamps:true,
        versionKey:false
    }
);

export const User=model("user",userSchema);
