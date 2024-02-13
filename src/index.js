import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()

.then(()=>{
    app.listen(process.env.PORT || 5000,()=>{
        console.log(`Server is running at port:${process.env.PORT}`);
    })
    
})
.catch((err)=>{
    console.log("Mongo DB connection failed!!!",err);
})
/*
import express from "express";
const app = express()

    // IIFE (Immediately Invoked Function Expression)
    (async () => {
        try {
            await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("Error", error)
                throw error
            })
            app.listen(process.env.PORT, () => {
                console.log(`Example app listening on port ${process.env.PORT}`)
            })
        } catch (error) {
            console.log(error)
        }
    })()    
*/