import mongoose from "mongoose";



const messageSchma = new mongoose.Schema({
   name:{
    required:true,
    type:String
   },
   mobile_no:{
    type:String,
    required:true
   },
   discription:{
    type:String,
    required:true
   },
   date:{
    type:Date,
    default:Date.now
   }
})

const message = mongoose.model("message",messageSchma)

export {message}