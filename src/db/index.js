import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB= async()=>{
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`MongoDB connected PORT:${process.env.PORT}!!${connectionInstance}!!${connectionInstance.connection.host}`)
    }catch(error){
        console.log("ERROR: Cannot connect DB")
        process.exit(1); 
    }
}
 
export default connectDB;