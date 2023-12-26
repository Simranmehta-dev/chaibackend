import mongoose from "mongoose"

const todoSchema= new mongoose.Schema({
  content:{
  type:String,
  required: true
  },
  complete:{
    type: Boolean,
    default:true
  },
  createdBy:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  subTodo:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"subtodo"
    }
  ]//array of sub todo

},{timestamps:true});

export const todo= mongoose.model("Todo",todoSchema)
//in databse "Todo" name will be "todos"