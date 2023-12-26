import mongoose from "mongoose"

const subTodoSchema= new mongoose.Schema({
  content:{
    type: String,
    required:true
  },
  complete:{
    type:Boolean,
    default:false
  },
  creadtedby:{
    type:Mongoose.Schema.Types.ObjectId,
    ref:"User"
  }
},{timestamps:true})

export const subtodo=mongoose.model("subtodo",subTodoSchema)