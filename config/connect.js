import mongoose from "mongoose";

const connectDb = async () =>{
   try {
    
    await mongoose.connect(process.env.MONGO_URL).then(()=>{
        console.log('connect to db')
     })

   } catch (error) {
     console.log(error)
   }
}

export default connectDb