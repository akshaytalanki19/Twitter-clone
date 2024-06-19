import express from "express";
import authRoutes from "./Routes/auth-routes.js"
import dotenv from "dotenv";
import connectMongoDb from "./db/connectMongoDb.js";
import cookieParser from "cookie-parser";
import userRoutes from "./Routes/user-routes.js";
import {v2 as cloudinary} from "cloudinary";
dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});
const app =express()
const PORT=process.env.PORT ||5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use("/api/auth",authRoutes);
app.use("/api/user",userRoutes);

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    connectMongoDb();
})