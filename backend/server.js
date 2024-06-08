import express from "express";
import authRoutes from "./Routes/auth-routes.js"
import dotenv from "dotenv";
import connectMongoDb from "./db/connectMongoDb.js";

dotenv.config();

const app =express()
const PORT=process.env.PORT ||5000;
console.log(process.env.MONGO_URI)
app.use("/api/auth",authRoutes);


app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    connectMongoDb();
})