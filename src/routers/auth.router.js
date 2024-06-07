
import { Router } from "express";
import { UserControllers, BookControllers, ClientControllers } from "../controllers/controllers.js";

const router = Router();

//User Routes
router.post("/register/user", UserControllers.registerUser);


//Books Routes
router.post("/register/book", BookControllers.registerBook);

//Clients Routes
router.post("/register/client", ClientControllers.registerClient);

export default router;