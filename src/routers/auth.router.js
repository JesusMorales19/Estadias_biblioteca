
import { Router } from "express";
import { UserControllers } from "../controllers/controllers.js";

const router = Router();

//User Routes
router.post("/register/user", UserControllers.registerUser);

export default router;