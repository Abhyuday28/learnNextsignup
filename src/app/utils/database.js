import mongoose from "mongoose";
 
let isConnected=false

export const connectToDB = async()=>{
    mongoose.set ('strictQuery',  true)

    if(isConnected){
        console.log("mongo is already connected")
        return
    }

    try{
        
        await mongoose.connect('mongodb://localhost:27017/NextLogin')

        isConnected=true
        console.log("connected to mongoDB")
    }

    catch(e){
        console.log(e)
    }
}