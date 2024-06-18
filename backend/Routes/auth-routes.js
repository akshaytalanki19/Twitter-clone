import {Router} from "express";
import { login, logout, signup,getMe } from "../controllers/auth-controler.js";
import {protectRoute} from '../middleware/protectRoute.js';
const router =Router();


router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.get("/me",protectRoute,getMe);



export default router;