// require('dotenv').config()
import dotenv from "dotenv"

import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()


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