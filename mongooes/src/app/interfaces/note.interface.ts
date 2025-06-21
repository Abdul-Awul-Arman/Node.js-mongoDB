import { Types } from "mongoose"

interface Notes{
    title:string,
    content:string,
    category:string,
    pinned:boolean,
    tags:{
        label:string,
        color:string
    },
    userId:Types.ObjectId
  }

export default Notes