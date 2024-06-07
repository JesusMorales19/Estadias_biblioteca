
import { Router } from "express";
import { UserControllers, BookControllers } from "../controllers/controllers.js";

const router = Router();

//User Routes
router.post("/register/user", UserControllers.registerUser);


//Books Routes
router.post("/register/book", BookControllers.registerBook);

export default router;