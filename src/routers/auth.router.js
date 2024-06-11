
import { Router } from "express";
import { UserControllers, BookControllers, ClientControllers } from "../controllers/controllers.js";

const router = Router();

//User Routes
router.post("/register/user", UserControllers.registerUser);
router.delete("/delete/user/:code", UserControllers.deleteUser)


//Books Routes
router.post("/register/book", BookControllers.registerBook);
router.delete("/delete/book/:code", BookControllers.deleteBook);

//Clients Routes
router.post("/register/client", ClientControllers.registerClient);
router.delete("/delete/client/:code", ClientControllers.deleteClient);

export default router;