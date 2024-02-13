import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
//telling express that the server will accept json 
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

app.use(express.static("Public"))


//cookieParser
app.use(cookieParser())

export default app;