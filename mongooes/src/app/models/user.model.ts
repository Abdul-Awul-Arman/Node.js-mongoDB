import { model, Schema } from "mongoose";
import  { Iaddress,Iuser } from "../interfaces/user.interface";


const addressSchema=new Schema<Iaddress>(
    {
        city:{type:String},
        zip:{type:Number},
        street:{type:String},


    },
    {
        _id:false
    }
)



const userSchema=new Schema<Iuser>(
    {
        firstName:{type:String,required:true,trim:true},
        lastName:{type:String,required:true,trim:true},
        email:{type:String,required:true,trim:true,lowercase:true,unique:true,
            validate:{
                validator:function(value){
                    return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/.test(value);

                },
                message:function(props){
                    return `${props.value} is not valid email`
                }
            }
        },
        password:{type:String,required:true,trim:true},
        role:{type:String,enum:{values:["admin","user","superAdmin"],message:"The user is not match the roll need got {VALUE}"},default:"user"},
        age:{type:Number,required:[true,"Age is must please fill up the field "],min:[18,"AGE MUST BE EQUAL OR GRATER"],max:60},
        
        address:{type:addressSchema},
     
    },
    {
        timestamps:true,
        versionKey:false
    }
);

export const User=model("User",userSchema);
