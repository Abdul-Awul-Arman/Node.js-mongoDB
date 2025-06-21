import { model, Schema } from "mongoose";
import Notes from "../interfaces/note.interface";
import { string } from "zod";

const NoteSchema=new Schema<Notes>({
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
          type:String, required:true
        },
        color:{
            type:String,
            default:"gray", 
            required:true
        }
    },
    userId:{type:Schema.Types.ObjectId,ref:"User",required:true}
 },




 {
    versionKey:false,
    timestamps:true
 }
);
 
export  const Note=model("Note",NoteSchema);

