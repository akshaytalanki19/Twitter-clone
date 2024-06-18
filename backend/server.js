import express from "express";
import authRoutes from "./Routes/auth-routes.js"
import dotenv from "dotenv";
import connectMongoDb from "./db/connectMongoDb.js";
import cookieParser from "cookie-parser";

dotenv.config();

const app =express()
const PORT=process.env.PORT ||5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/api/auth",authRoutes);


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    connectMongoDb();
})