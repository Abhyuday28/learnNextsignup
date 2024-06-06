import mongoose from "mongoose";
 
let isConnected=false

export const connectToDB = async()=>{
    mongoose.set ('strictQuery',  true)

    if(isConnected){
        return console.log("mongo is already connected")
    }

    try{
        
        await mongoose.connect(process.env.DB_URL)

        isConnected=true;
        console.log("connected to mongoDB")
    }

    catch(e){
        console.log(e.message)
    }
}