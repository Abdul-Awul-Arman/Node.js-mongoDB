import { model, Schema } from "mongoose";

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
 
export  const Note=model("Note",NoteSchema);

